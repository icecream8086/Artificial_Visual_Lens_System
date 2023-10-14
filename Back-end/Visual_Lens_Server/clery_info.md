example table

```sql
CREATE TABLE celery_tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(20) NOT NULL,
    result INT NOT NULL,
    traceback TEXT,
    children TEXT,
    date_done DATETIME NOT NULL,
    task_id VARCHAR(36) NOT NULL
);

```

example data

``` json
{
    "status": "SUCCESS",
    "result": 8,
    "traceback": null,
    "children": [],
    "date_done": "2023-10-14T06:14:18.458706",
    "task_id": "
    "
}
```

select Example

```python
import redis

# 连接到 Redis 数据库
r = redis.Redis(host='your_redis_host', port=your_redis_port, db=14)

# 查询指定 key 的数据
key = 'celery-task-meta-f1e99b90-0f96-4baa-959b-824ea5a15e76'
data = r.get(key)

# 打印查询结果
print(data)

```