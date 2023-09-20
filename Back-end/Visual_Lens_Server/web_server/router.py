from flask import Blueprint, jsonify,g
from celery_tasks import add_numbers
from redis import Redis

import time

test_module = Blueprint('router', __name__)
_redis = Redis(host='192.168.101.1', port=6379, db=2)

@test_module.before_app_request
def init_global_var():
    # 初始化全局变量
    g.UserUID = 0

@test_module.route('/test_celery', methods=['POST', 'GET'])
def test_celery():
    try:
        result = add_numbers.delay(3, 4)  # 调用Celery任务
        task_id = result.id
        result_json = {'message': 'Task is still running, please check back later', 'task_id': task_id}
        return jsonify(result_json), 200
    except Exception as e:
        return str(e), 500


@test_module.route('/task-info/<task_id>', methods=['GET'])
def task_info(task_id):
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
    return jsonify(response)


@test_module.route('/all-tasks',methods=['GET'])
def all_tasks():
    task_ids = _redis.lrange('tasks', 0, -1)
    tasks = []
    for task_id in task_ids:
        task = add_numbers.AsyncResult(task_id.decode())
        tasks.append({
            'id': task_id.decode(),
            'state': task.state,
            'result': task.result if task.state != 'PENDING' else None,
            'progress': task.info.get('progress', 0) if task.state == 'PROGRESS' else None
        })
    return jsonify(tasks)


@test_module.route('/clear_tasks', methods=['GET'])
def clear_tasks():
    _redis.delete('tasks')
    return 'All tasks have been cleared.'

@test_module.route('/get_user_uid',methods=['GET'])
def get_user_uid():
    return str(g.UserUID)

@test_module.route('/set_user_uid/<int:user_uid>',methods=['POST'])
def set_user_uid(user_uid):
    g.UserUID = user_uid
    return 'UserUID set to ' + str(user_uid)


@test_module.route('/do_task')
# 全局请求模板
def do_task():
    try:
        g.UserUID = 123
    
    except Exception as e:
        return str(e), 500
    finally:
        # 重置全局变量
        g.UserUID = 0
    return 'task done', 200