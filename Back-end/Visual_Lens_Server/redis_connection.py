import redis
import random

# 连接到Redis服务器
r = redis.Redis(host='192.168.101.1', port=6379)

# 随机生成数据并插入Redis
for i in range(10):
    key = f"key{i}"
    value = random.randint(1, 100)
    r.set(key, value)

# 查询全部数据
keys = r.keys()  # 获取所有键
for key in keys:
    value = r.get(key)  # 获取键对应的值
    print(f"{key}: {value}")
