from flask import Flask, jsonify
from celery import Celery

app = Flask(__name__)


# 配置Celery
celery = Celery(app.name, broker='redis://192.168.101.1:6379/0', backend='redis://192.168.101.1:6379/1')
# 定义一个Celery任务

# app.register_blueprint()


@celery.task
def add_numbers(x, y):
    return x + y

import time

@app.route('/test-celery', methods=['POST', 'GET'])
def test_celery():
    try:
        # 调用Celery任务
        start_time = time.time()
        result = add_numbers.delay(3, 4)
        # 调用Celery任务

        # 在日志中记录任务开始时间
        app.logger.info("Celery task started at: %s", start_time)

        # 等待任务完成或设置一个适当的超时时间
        result.get(timeout=10)  # 设置适当的超时时间

        # 在日志中记录任务完成时间
        end_time = time.time()
        app.logger.info("Celery task completed at: %s", end_time)

        # 转换结果为JSON格式
        result_json = jsonify(result=result.get())
        return result_json
    except Exception as e:
        return str(e)


if __name__ == '__main__':
    app.run( host='0.0.0.0', port=5000)
