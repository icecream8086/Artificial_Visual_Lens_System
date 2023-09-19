from flask import Flask,g
from router import router

app = Flask(__name__)

@app.before_first_request
def init_global_var():
    # 初始化全局变量
    g.UserUID = 0
    
    
app.register_blueprint(router)

if __name__ == '__main__':
    app.run( host='0.0.0.0', port=5000, debug=True)
