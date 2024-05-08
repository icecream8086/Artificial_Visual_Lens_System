

# 创建用户admin,角色为A和B,此时admin的权限为A和B的权限
# 允许同时获得多个权限组,所以admin的权限为A和B的权限的并集,输入为 A 和 B
# 输出会有两个read ,但是优先级不一样 
# 其他乱七八糟的同理
user_admin = User('admin', ['A', 'B'])
str_dag2.add_user(user_admin)

user_admin2 = User('admin2', ['B'])
str_dag2.add_user(user_admin2)
# 创建用户 sys_execute ,角色为C , C依赖B和A,因此sys_execute的权限最高
sys_execute = User('sys_execute', ['C'])
str_dag2.add_user(sys_execute)

# CREATE TABLE nodes (
#     id INT AUTO_INCREMENT PRIMARY KEY,
#     name VARCHAR(255) NOT NULL,
#     permissions JSON NOT NULL,
#     priority INT NOT NULL
# );

# CREATE TABLE edges (
#     id INT AUTO_INCREMENT PRIMARY KEY,
#     from_node_id INT,
#     to_node_id INT,
#     FOREIGN KEY (from_node_id) REFERENCES nodes(id),
#     FOREIGN KEY (to_node_id) REFERENCES nodes(id)
# );
