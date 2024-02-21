from flask import Blueprint, jsonify,g
from celery_tasks import add_numbers
from redis import Redis
from celery.result import AsyncResult
from celery_tasks import celery


test_module = Blueprint('router', __name__)

@test_module.before_app_request
def init_global_var():
    # 初始化全局变量
    g.UserUID = 0

@test_module.route('/test_celery', methods=['POST', 'GET'])
def test_celery():
    try:
        result = add_numbers.delay(4, 4)  # 调用Celery任务
        task_id = result.id
        result_json = {'message': 'Task is still running, please check back later', 'task_id': task_id}
        return jsonify(result_json), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        # 重置全局变量
        g.UserUID = 0
        return jsonify({'message': 'task done'}), 200


@test_module.route('/task-info/<task_id>', methods=['GET'])
def task_info(task_id):
    try:
        task = add_numbers.AsyncResult(task_id)
        if task.state == 'PROGRESS':
            response = {
                'state': task.state,
                'progress': task.info.get('progress', 0)
            }
        elif task.state != 'FAILURE':
            response = {
                'state': task.state,
                'result': task.result
            }
        
        else:
            # task failed
            response = {
                'state': task.state,
                'result': str(task.info),  # this is the exception raised
            }
        return jsonify({'message':response}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# @test_module.route('/running_tasks', methods=['GET'])
# def running_tasks():
#     try:
#         task_ids = _redis.lrange('tasks', 0, -1)
#         running_tasks = []
#         for task_id in task_ids:
#             task = add_numbers.AsyncResult(task_id.decode())
#             if task.state == 'PENDING' or task.state == 'STARTED':
#                 running_tasks.append({
#                     'id': task_id.decode(),
#                     'state': task.state
#                 })
#         return jsonify({'message': running_tasks}), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    

# @test_module.route('/all_completed_tasks',methods=['GET'])
# def all_completed_tasks():
#     try:
#         keys = celery.backend.client.keys('celery-task-meta-*')
#         results = []
#         for key in keys:
#             result = AsyncResult(key.decode().replace('celery-task-meta-', ''))
#             if result.ready():
#                 results.append({str(key): str(result.result)})
#         return jsonify({'message': result}), 200
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500