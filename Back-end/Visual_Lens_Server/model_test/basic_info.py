import os
from PIL import Image

'''
basic image attributes
'''

# 输入图片文件路径
image_path = 'model_test/image/air_battle.jpg'

# 读取图片并获取属性
with Image.open(image_path) as img:
    format = img.format
    size = img.size
    mode = img.mode

# 获取文件的修改时间、访问时间、创建时间、大小和占用空间
mod_time = os.path.getmtime(image_path)
access_time = os.path.getatime(image_path)
create_time = os.path.getctime(image_path)
file_size = os.path.getsize(image_path)
disk_usage = os.statvfs(image_path).f_frsize * os.statvfs(image_path).f_blocks

# 输出图片属性和文件时间、大小和占用空间
print('Format: {}'.format(format))
print('Size: {}'.format(size))
print('Mode: {}'.format(mode))
print('Modification time:', mod_time)
print('Access time:', access_time)
print('Creation time:', create_time)
print('File size:', file_size)
print('Disk usage:', disk_usage)