from sys import meta_path
import h5py
import os
import hashlib
import time
import json

meta_data = {
    'send_server_info': 'Send Server XYZ',
    'receive_server_info': 'Receive Server XYZ',
    'folder_info': 'Folder ABC',
    'time_info': '1708427501',
    'length': 123
}
json_meta_data = json.dumps(meta_data)

class JsonFile:
    def __init__(self, file_path):
        self.file_path = file_path

    def create_dataset(self, dataset_name, data):
        existing_data = self.read()
        existing_data[dataset_name] = data
        self.write(existing_data)

    def read_dataset(self, dataset_name):
        data = self.read()
        return data.get(dataset_name, None)

    def close(self):
        self.file_path = None

    def read(self):
        if not os.path.exists(self.file_path): # type: ignore
            return {}
        with open(self.file_path, 'r') as json_file: # type: ignore
            data = json.load(json_file)
        return data

    def write(self, data):
        with open(self.file_path, 'w') as json_file: # type: ignore
            json.dump(data, json_file)

# 创建一个新的Json文件
json_file = JsonFile('myfile.json') 

# 写入meta_data到Json文件
json_file.create_dataset('meta_data', json_file)

# 写入其他内容到Json文件
json_file.create_dataset('file1.txt', 'file1.txt content')
json_file.create_dataset('file2.txt', 'file2.txt content')

# 读取Json文件的内容
data = json_file.read_dataset('file1.txt')
print(f"Dataset: file1.txt")
print(f"Value: {data}")
print("")

# 读取meta_data
meta_data = json_file.read_dataset('meta_data')
print(f"Meta data: {meta_data}")

json_file.close()