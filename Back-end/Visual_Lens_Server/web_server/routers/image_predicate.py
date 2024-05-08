from unittest import result
from flask import Blueprint, jsonify
from lib.OfficalResNet50 import offical_resNet
from lib.CustomizedResNet.CustomizeResNet import predict_images
from flask import request
from flask import Blueprint, g, jsonify,request
from celery_tasks import test_model_delay,task_cancel_delay,task_start_delay,task_resume_delay# type: ignore
from flask import Blueprint, g, jsonify,request
import os
from werkzeug.utils import secure_filename




image_predicate = Blueprint('image_predicate', __name__)

@image_predicate.route('/offical_resnet', methods=['POST']) # type: ignore
def offical_resnet():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image part in the request'}), 400
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': 'No selected image'}), 400
        if file and allowed_file(file.filename):
            # TODO: Process the image file and generate result_json
            result_json = offical_resNet(file)
            return result_json, 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@image_predicate.route('/customized_resnet', methods=['POST']) # type: ignore
def customized_resnet():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image part in the request'}), 400
        file = request.files['image']
        label_names = request.form['label_names']
        if file.filename != '':
            label_names = label_names.split(',')
            
        print("label_names",label_names)
        model_path = request.form['model_path']
        if file.filename == '':
            return jsonify({'error': 'No selected image'}), 400
        if file and allowed_file(file.filename):
            result_json = predict_images(model_path,label_names,file)
            return result_json, 200
    except ValueError as e:
        if str(e) == "Either label_map or label_names must be provided.":
            return jsonify({'error': str(e)}), 405
        else:
            return jsonify({'error': str(e)}), 500
    except Exception as e:
        print("error",e)
        return jsonify({'error': str(e)}), 500
    

@image_predicate.route('/clip_predicate', methods=['POST']) # type: ignore
def clip_predicate():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image part in the request'}), 400
        file = request.files['image']
        text_dictionary = request.form['text_dictionary'].split(',')
        
        if file.filename == '':
            return jsonify({'error': 'No selected image'}), 400
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename) # type: ignore
            file_path = os.path.join('catch', filename)
            file.save(file_path)
            result = task_resume_delay.delay(file_path, text_dictionary)
            task_id = result.id
            result_json = {'message': 'Task is still running, please check back later', 'task_id': task_id}
            return result_json, 200
        else:
            return jsonify({'error': 'Invalid file type'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'bmp', 'tiff', 'webp'}
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS