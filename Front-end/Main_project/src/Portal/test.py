import requests

# 注册接口的URL
url = 'http://192.168.1.100:3000/api/auth/signup'

# 注册请求的数据
data = {
    'full_name': 'John Doe',
    'username': 'johndoe',
    'password': 'password123',
    'email': 'johndoe@example.com'
}

# 发送注册请求
response = requests.post(url, json=data)

# 打印响应结果
print('Response status code:', response.status_code)
print('Response JSON:', response.json())
