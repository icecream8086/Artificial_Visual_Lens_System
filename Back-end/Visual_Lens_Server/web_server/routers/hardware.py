import json
import os
from flask import Blueprint
from lib.sys_call.gpu import list_gpu

hardware = Blueprint('hardware', __name__)

@hardware.route('/ping', methods=['GET'])
def ping():
    json = {
        "status": "Visual Lens Server is running"
    }
    return json, 200

@hardware.route('/get_all_gpus', methods=['GET'])
def get_all_gpus():
    try:
        gpu_info = list_gpu()
        json = {
            "gpu_info": gpu_info
        }
        return json, 200
    except Exception as e:
        return str(e), 500