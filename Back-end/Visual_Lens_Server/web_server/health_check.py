from flask import Blueprint, jsonify

health_check_bp = Blueprint('health_check', __name__)

@health_check_bp.route('/health_check')
def health_check():
    return jsonify({'status': 'ok'})