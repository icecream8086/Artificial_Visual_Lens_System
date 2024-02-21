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
        dataset_path= './dataset' if 'data_path' not in request.form else request.form['data_path']
        module_name = './ResNet-0602.pth' if 'module_name' not in request.form else request.form['module_name']
        train_rate = 0.6 if 'train_rate' not in request.form else float(request.form['train_rate'])
        test_rate = 0.2 if 'test_rate' not in request.form else float(request.form['test_rate'])
        lr = 0.001 if 'lr' not in request.form else float(request.form['lr'])
        step_size = 10 if 'step_size' not in request.form else int(request.form['step_size'])
        gamma = 0.1 if 'gamma' not in request.form else float(request.form['gamma'])
        epochs = 36 if 'epochs' not in request.form else int(request.form['epochs'])

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