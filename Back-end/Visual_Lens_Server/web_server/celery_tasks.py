import time
from unittest import result
from celery import Celery
from flask import json

from lib.CNN_lib.data_split import data_split
from lib.CustomizedResNet.model_test_Resnet50 import evaluate_model
from lib.CNN_lib.dataset_sample import create_transform
from lib.CustomizedResNet.train import TrainAndTestModel
from lib.clip1 import get_image_label
train_tasks = TrainAndTestModel()

# 配置Celery
celery = Celery('myapp', broker='redis://192.168.101.1:6379/15', backend='redis://192.168.101.1:6379/14')
CELERY_RESULT_BACKEND = 'rpc://'
from redis import Redis

redis = Redis(host='192.168.101.1', port=6379, db=13)

@celery.task(bind=True)
def add_numbers(self, x, y):
    """ 定义一个Celery任务 """
    # 允许添加超时功能 time_limit=120
    # 在任务开始时将任务 ID 添加到 Redis
    redis.rpush('tasks', self.request.id)
    # 执行任务...
    for i in range(1, 12):
        time.sleep(1)
        self.update_state(state='PROGRESS', meta={'progress': i*10})
    result = x + y
    # 在任务结束时将任务 ID 从 Redis 中移除，并添加到 completed_tasks 列表中
    redis.lrem('tasks', 0, self.request.id)
    redis.rpush('completed_tasks', self.request.id)
    return result

@celery.task(bind=True)
def test_model_delay(self, data_set_path, model_path, train_rate, test_rate, resize=None, center_crop=None, mean=None, std=None):
    """ 定义一个Celery任务 """
    # 允许添加超时功能 time_limit=120
    # 在任务开始时将任务 ID 添加到 Redis
    redis.rpush('tasks', self.request.id)
    try:
        # 执行任务...
        model_path='./model/'+model_path
        transform=create_transform(resize,center_crop,mean,std) # type: ignore
        test_loader, val_loader = data_split(data_set_path,transform,train_rate,test_rate)
        
        # 检查加载器是否为空
        if not test_loader or not val_loader:
            raise ValueError("Data loaders are empty. Please check the data set path and split rates.")
        
        result_json = evaluate_model(model_path, test_loader, val_loader)
        print(f"Result from evaluate_model: {result_json}")
        
        # 检查结果是否为空
        if not result_json:
            raise ValueError("Evaluation result is empty. Please check the model and data loaders.")
        
        # 在任务结束时将任务 ID 从 Redis 中移除，并添加到 completed_tasks 列表中
        redis.lrem('tasks', 0, self.request.id)
        redis.rpush('completed_tasks', self.request.id)
        
        # 更新任务状态为'SUCCESS'
        self.update_state(state='SUCCESS', meta={'result': result_json})
        # 清空'tasks'列表
        redis.delete('tasks')
        return result_json
    except Exception as e:
        # 如果出现错误，返回错误消息
        print(f"Exception occurred: {e}")
        return {'error': str(e)}
    
@celery.task(bind=True)
def task_start_delay(self, dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs):
    """ 定义一个Celery任务 """
    # 允许添加超时功能 time_limit=120
    # 在任务开始时将任务 ID 添加到 Redis
    redis.rpush('tasks', self.request.id)
    # 尝试获取锁
    lock = redis.lock('train_tasks_start_lock', timeout=60)
    if lock.acquire(blocking=False):  # 非阻塞模式，如果锁已被其他任务获取，则立即返回 False
        try:
            result_json = train_tasks.start(dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs)
        finally:
            # 无论任务是否成功，都要释放锁
            if lock.locked():
                lock.release()
    else:
        # 如果获取锁失败，返回异常信息
        result_json = json.dumps({"status": "error", "message": "Another task is running."})
    # 在任务结束时将任务 ID 从 Redis 中移除，并添加到 completed_tasks 列表中
    redis.lrem('tasks', 0, self.request.id)
    redis.rpush('completed_tasks', self.request.id)
    return result_json


@celery.task(bind=True)
def task_cancel_delay(self):
    """ 定义一个Celery任务 """
    # 允许添加超时功能 time_limit=120
    # 在任务开始时将任务 ID 添加到 Redis
    redis.rpush('tasks', self.request.id)
    # 执行任务...
    result_json = train_tasks.cancel()
    # 在任务结束时将任务 ID 从 Redis 中移除，并添加到 completed_tasks 列表中
    redis.lrem('tasks', 0, self.request.id)
    redis.rpush('completed_tasks', self.request.id)
    return result_json


@celery.task(bind=True)
def task_resume_delay(self,file_path, text_dictionary):
    """ 定义一个Celery任务 """
    # 允许添加超时功能 time_limit=120
    # 在任务开始时将任务 ID 添加到 Redis
    redis.rpush('tasks', self.request.id)
    # 执行任务...
    result_json = get_image_label(file_path, text_dictionary)

    # 在任务结束时将任务 ID 从 Redis 中移除，并添加到 completed_tasks 列表中
    redis.lrem('tasks', 0, self.request.id)
    redis.rpush('completed_tasks', self.request.id)
    return result_json