from flask import Flask
from router import test_module
from health_check import health_check_bp
app = Flask(__name__)

app.register_blueprint(test_module)
app.register_blueprint(health_check_bp)
if __name__ == '__main__':
    app.run( host='0.0.0.0', port=5000, debug=True)
