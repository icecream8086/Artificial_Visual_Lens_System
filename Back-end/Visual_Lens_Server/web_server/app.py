from flask import Flask
from router import test_module

app = Flask(__name__)

app.register_blueprint(test_module)

if __name__ == '__main__':
    app.run( host='0.0.0.0', port=5000, debug=True)
