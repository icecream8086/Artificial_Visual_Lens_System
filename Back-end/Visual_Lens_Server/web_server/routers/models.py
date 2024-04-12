from flask import Blueprint, g, jsonify,request
from celery_tasks import test_model_delay,task_cancel_delay,task_start_delay# type: ignore


models = Blueprint('models', __name__)

    
@models.route('/test_models', methods=['post']) # type: ignore
def test_models():
    try:
        if request.content_type != 'application/x-www-form-urlencoded':
            return jsonify({'error': 'Invalid Content-Type. Only application/x-www-form-urlencoded is supported.'}), 400
        data_set_path = request.form['data_set_path']
        model_path = request.form['model_path']
        train_rate = float(request.form['train_rate'])
        test_rate = float(request.form['test_rate'])
# 设置默认值
        resize = None if 'resize' not in request.form else int(request.form['resize'])
        center_crop = None if 'center_crop' not in request.form else int(request.form['center_crop'])
        mean = None if 'mean' not in request.form else list(map(float, request.form['mean'].split(',')))
        std = None if 'std' not in request.form else list(map(float, request.form['std'].split(',')))
        
        result = test_model_delay.delay(data_set_path, model_path, train_rate, test_rate, resize, center_crop, mean, std)  # 调用Celery任务
        task_id = result.id
        result_json = {'message': 'Task is still running, please check back later', 'task_id': task_id}
        return result_json, 200
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
    
@models.route('/train_models', methods=['post']) # type: ignore
def test_models_get():
    try:
        # 检查每个参数是否存在并且不为空
        if 'data_path' not in request.form or not request.form['data_path']:
            return jsonify({'error': 'data_path is required'}), 400
        if 'module_name' not in request.form or not request.form['module_name']:
            return jsonify({'error': 'module_name is required'}), 400
        if 'train_rate' not in request.form or not request.form['train_rate']:
            return jsonify({'error': 'train_rate is required'}), 400
        if 'test_rate' not in request.form or not request.form['test_rate']:
            return jsonify({'error': 'test_rate is required'}), 400
        if 'lr' not in request.form or not request.form['lr']:
            return jsonify({'error': 'lr is required'}), 400
        if 'step_size' not in request.form or not request.form['step_size']:
            return jsonify({'error': 'step_size is required'}), 400
        if 'gamma' not in request.form or not request.form['gamma']:
            return jsonify({'error': 'gamma is required'}), 400
        if 'epochs' not in request.form or not request.form['epochs']:
            return jsonify({'error': 'epochs is required'}), 400

        # 如果所有参数都存在并且不为空，继续执行任务
        dataset_path = request.form['data_path']
        module_name = request.form['module_name']
        train_rate = float(request.form['train_rate'])
        test_rate = float(request.form['test_rate'])
        lr = float(request.form['lr'])
        step_size = int(request.form['step_size'])
        gamma = float(request.form['gamma'])
        epochs = int(request.form['epochs'])

        result = task_start_delay.delay(dataset_path, module_name, train_rate, test_rate, lr, step_size, gamma, epochs)  # 调用Celery任务
        task_id = result.id
        result_json = {'message': 'Task is still running, please check back later', 'task_id': task_id}
        return result_json, 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@models.route('/cancel_models', methods=['get']) # type: ignore
def cancel_models():
    try:
        result = task_cancel_delay.delay()  # 调用Celery任务
        task_id = result.id
        result_json = {'message': 'Task is still running, please check back later', 'task_id': task_id}
        return result_json, 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500