import redis

# 连接到Redis服务器
redis_client = redis.Redis(host='192.168.101.1', port=6379, db=2)

# 查询2号数据库全部信息
all_data = redis_client.keys('*')
for key in all_data:
    value = redis_client.get(key)
    print(f'{key.decode()}: {value.decode()}')