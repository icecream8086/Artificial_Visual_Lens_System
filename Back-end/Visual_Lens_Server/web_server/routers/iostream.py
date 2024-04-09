import json
import shutil
from flask import Blueprint, Response, jsonify, send_from_directory
from flask import request
from flask import Blueprint, jsonify,request
from flask import Blueprint, jsonify,request
import os
from regex import D
from werkzeug.utils import secure_filename

iostream = Blueprint('iostream', __name__)

@iostream.route('/upload_image', methods=['POST']) # type: ignore
def upload_image():
    try:
        # 检查是否有文件被上传
        if 'file' not in request.files:
            return jsonify({'error': 'No file part in the request'}), 400
        file = request.files['file']
        # 如果用户没有选择文件，浏览器也可能会提交一个空的文件部分，所以需要检查文件是否存在
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        if 'path' not in request.form:
            return jsonify({'error': 'No path provided'}), 400
        path = request.form['path']
        data = file.read()  # 直接读取二进制数据
        # 保存文件内容到"data_dir"文件夹的子目录
        filename = secure_filename(file.filename) # type: ignore
        save_image_data(data, path, filename)  # 将路径和文件名分开传递
        return jsonify({'message': 'File uploaded successfully'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@iostream.route('/clear_data', methods=['POST']) # type: ignore    
def clear_data():
    try:
        flag=request.form['flag']
        if flag == '':
            return jsonify({'error': 'No flag provided'}), 400
        result = clear_datas(flag) 
        return Response(result,status=200)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@iostream.route('/load_model/<model_name>', methods=['GET']) # type: ignore
def load_model(model_name):
    model_dir = 'model'
    if os.path.exists(os.path.join(model_dir, model_name)):
        return send_from_directory(directory=model_dir, path=model_name)
    else:
        return jsonify({'error': 'Model not found'}), 404

@iostream.route('/automatic_loader', methods=['POST']) # type: ignore
def automatic_loader():
    try:
        folder_chain = request.form['folder_chain'].split(',')
        data_dir = 'data_dir'
        dataset_dir = 'dataset'
        errors = []

        for folder in folder_chain:
            source_folder = os.path.join(data_dir, folder)
            target_folder = os.path.join(dataset_dir, folder)

            if os.path.exists(source_folder):
                shutil.copytree(source_folder, target_folder)
            else:
                errors.append(f'Folder {folder} does not exist in data_dir')

        if errors:
            return jsonify({'errors': errors}), 400
        else:
            return jsonify({'message': 'Folders copied successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@iostream.route('/store_model', methods=['POST']) # type: ignore
def store_model():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file part in the request'}), 400
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No selected file'}), 400
        filename = secure_filename(file.filename) # type: ignore
        file.save(os.path.join('model', filename))
        return jsonify({'message': 'Model stored successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
 
@iostream.route('/del_dir', methods=['POST']) # type: ignore
def del_dir():
    try:
        folder = request.form['dir']
        if folder == '':
            return jsonify({'error': 'No folder provided'}), 400

        folder_path = os.path.join('data_dir', folder)
        if os.path.exists(folder_path):
            shutil.rmtree(folder_path)
            return jsonify({'message': 'Folder deleted successfully'}), 200
        else:
            return jsonify({'message': 'Folder does not exist'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500
 
    
@iostream.route('/del_model', methods=['POST']) # type: ignore
def del_model():
    try:
        model = request.form['model']
        if model == '':
            return jsonify({'error': 'No model provided'}), 400

        model_path = os.path.join('model', model)
        if os.path.exists(model_path):
            os.remove(model_path)
            return jsonify({'message': 'Model deleted successfully'}), 200
        else:
            return jsonify({'message': 'Model does not exist'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
def get_folder_details(folder_path):
    total_size = 0
    file_count = 0
    for dirpath, dirnames, filenames in os.walk(folder_path):
        for f in filenames:
            fp = os.path.join(dirpath, f)
            total_size += os.path.getsize(fp)
            file_count += 1
    # Convert size to MB
    total_size = total_size / (1024 * 1024)
    return total_size, file_count

@iostream.route('/list_dir', methods=['GET']) # type: ignore
def list_dir():
    try:
        data_dir = 'data_dir'
        if os.path.exists(data_dir):
            folders = []
            for folder in os.listdir(data_dir):
                folder_path = os.path.join(data_dir, folder)
                size, file_count = get_folder_details(folder_path)
                folders.append({
                    'name': folder,
                    'size': size,  # size is now in MB
                    'file_count': file_count
                })
            return jsonify({'folders': folders}), 200
        else:
            return jsonify({'error': 'Data directory does not exist'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@iostream.route('/list_models', methods=['GET']) # type: ignore
def list_model():
    try:
        model_dir = 'model'
        if os.path.exists(model_dir):
            models = []
            for model in os.listdir(model_dir):
                models.append(model)
            return jsonify({'models': models}), 200
        else:
            return jsonify({'error': 'Model directory does not exist'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500
        
def save_image_data(data, path, filename):
    try:
                # 创建data_dir文件夹，如果它不存在
        if not os.path.exists('data_dir'):
            os.makedirs('data_dir')

        # 确保文件名不包含非法字符
        filename = filename.replace('/', '_').replace('\\', '_')

        full_path = os.path.join('data_dir', path)
        if not os.path.exists(full_path):
            os.makedirs(full_path)
        with open(os.path.join(full_path, filename), 'wb') as f:  # 注意这里是 'wb' 而不是 'w'
            f.write(data)
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500
    


def clear_datas(flag):
    try:
        # 定义需要清空的文件夹
        data_dirs = []

        if flag == 'all':
            data_dirs = ['data_dir', 'catch', 'dataset']
        elif flag == 'data_dir':
            data_dirs = ['data_dir']
        elif flag == 'catch':
            data_dirs = ['catch']
        elif flag == 'dataset':
            data_dirs = ['dataset']
        else:
            raise ValueError('Invalid flag')  # 抛出异常

        # 清空文件夹
        for dir in data_dirs:
            dir_path = os.path.join(os.getcwd(), dir)
            if os.path.exists(dir_path):
                shutil.rmtree(dir_path)
            else:
                raise FileNotFoundError(f'{dir} directory does not exist')  # 抛出异常
        
        # 重新创建空文件夹
        for dir in data_dirs:
            dir_path = os.path.join(os.getcwd(), dir)
            os.makedirs(dir_path)

        # 返回操作成功的消息
        success_message = {'message': 'Folder clear successfully'}
        return json.dumps(success_message)

    except Exception as e:
        raise e  # 直接抛出异常