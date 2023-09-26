import time
from celery import Celery
# 配置Celery
celery = Celery('myapp', broker='redis://192.168.101.1:6379/15', backend='redis://192.168.101.1:6379/14')

from redis import Redis

redis = Redis(host='192.168.101.1', port=6379, db=13)

@celery.task(bind=True)
def add_numbers(self, x, y):
    """ 定义一个Celery任务 """
    # 在任务开始时将任务 ID 添加到 Redis
    redis.rpush('tasks', self.request.id)
    # 执行任务...
    for i in range(1, 12):
        time.sleep(1)
        self.update_state(state='PROGRESS', meta={'progress': i*10})
    result = x + y
    # 在任务结束时将任务 ID 从 Redis 中移除
    redis.lrem('tasks', 0, self.request.id)
    return result