todo: 服务器端文件夹结构

图像管理服务器和数据集管理服务器分别为主从模式

先请求图像处理服务器，post请求验证服务器死活，然后等待同步数据，当鉴定服务器返回结果时，此时视为一次图像上传完成
修改删除同理

如果isdelete，不是真的删除，而是不再显示
这个集合需要在回收站中显示
如果unlink，彻底删除，需要modify文件/文件夹权限 (需要显示权限表)


文件夹sha256(UID+文件夹名)
此服务器创建数据副本，不保存关系信息

每个文件夹视作一个数据集，训练模型时复制文件夹
禁止直接暴露路径，预防xss攻击
