import time
from unittest import result
from celery import Celery

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
    # 执行任务...
    transform=create_transform(resize,center_crop,mean,std) # type: ignore
    test_loader, val_loader = data_split(data_set_path,transform,train_rate,test_rate)
    result_json = evaluate_model(model_path, test_loader, val_loader)
    # 在任务结束时将任务 ID 从 Redis 中移除，并添加到 completed_tasks 列表中
    redis.lrem('tasks', 0, self.request.id)
    redis.rpush('completed_tasks', self.request.id)
    return result_json

@celery.task(bind=True)
def task_start_delay(self, dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs):
    """ 定义一个Celery任务 """
    # 允许添加超时功能 time_limit=120
    # 在任务开始时将任务 ID 添加到 Redis
    redis.rpush('tasks', self.request.id)
    # 执行任务...
    result_json = train_tasks.start(dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs)
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