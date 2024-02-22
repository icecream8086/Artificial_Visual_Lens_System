from flask import Flask
from router import test_module
from health_check import health_check_bp
from routers.hardware import hardware
from routers.image_predicate import image_predicate
from routers.models import models
from routers.iostream import iostream
app = Flask(__name__)

app.register_blueprint(test_module)
app.register_blueprint(health_check_bp)
app.register_blueprint(hardware)
app.register_blueprint(image_predicate)
app.register_blueprint(models)
app.register_blueprint(iostream)

if __name__ == '__main__':
    app.run( host='0.0.0.0', port=5000, debug=True)
