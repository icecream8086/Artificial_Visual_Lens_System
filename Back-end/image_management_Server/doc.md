这是一个涉及到文件同步和通信协议设计的问题。以下是一个基本的设计方案：

1. **元数据同步**：服务器A首先计算所有照片的SHA256值，并将这些值存储在HDF5文件中。然后，服务器A将此HDF5文件发送到服务器B。

2. **数据比对**：服务器B接收到HDF5文件后，将其与本地的HDF5文件（如果存在）进行比对，找出需要更新或新增的照片。

3. **数据请求**：服务器B将需要更新或新增的照片的SHA256值列表发送回服务器A。

4. **数据传输**：服务器A接收到请求后，找到对应的照片，然后将照片数据发送到服务器B。

5. **数据接收和验证**：服务器B接收到照片数据后，计算其SHA256值，并与请求中的SHA256值进行比对，以验证数据的完整性。

以下是这个设计方案的伪代码：

```python
# 服务器A
def serverA():
    # 计算所有照片的SHA256值，并存储在HDF5文件中
    metadata = calculate_sha256_and_store_in_hdf5(photos)
    # 将HDF5文件发送到服务器B
    send_to_serverB(metadata)

# 服务器B
def serverB():
    # 接收来自服务器A的HDF5文件
    metadata = receive_from_serverA()
    # 与本地的HDF5文件进行比对，找出需要更新或新增的照片
    photos_to_update = compare_with_local(metadata)
    # 将需要更新或新增的照片的SHA256值列表发送回服务器A
    send_to_serverA(photos_to_update)

# 服务器A
def serverA():
    # 接收来自服务器B的请求
    photos_to_update = receive_from_serverB()
    # 找到对应的照片，然后将照片数据发送到服务器B
    send_photos_to_serverB(photos_to_update)

# 服务器B
def serverB():
    # 接收来自服务器A的照片数据
    photos_data = receive_from_serverA()
    # 计算其SHA256值，并与请求中的SHA256值进行比对，以验证数据的完整性
    verify_photos(photos_data)
```

这个设计方案只是一个基本的框架，实际的实现可能需要考虑更多的细节，例如错误处理、数据压缩、数据加密等。