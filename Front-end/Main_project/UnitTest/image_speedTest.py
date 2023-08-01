import hashlib
import requests
from PIL import Image
import os
url = "http://192.168.1.100:3000/users/image_test"

# 发送 GET 请求并计算完成响应所需的时间
response = requests.get(url)
response_time = response.elapsed.total_seconds()


# 将响应内容保存为临时文件
with open("temp_image.jpg", "wb") as file:
    file.write(response.content)
    file.close()
# close file

# 使用 PIL 库打开图像
image = Image.open("temp_image.jpg")
file_read = open("./temp_image.jpg", "rb")

# 获取图像的分辨率和大小
# get sha256 code of image
sha_256_code = hashlib.sha256(file_read.read()) 

resolution = image.size
filesize = len(response.content)
file_read.close()

# 打印结果
print("Response Time:", response_time, "seconds")
print("Resolution:", resolution)
print("File Size:", filesize , "bytes")
print("File Size:", filesize / 1024 / 1024, "MB")
print("Hash Code:", sha_256_code.hexdigest())
