# User

此为user 相关表单的介绍

## Table users

UID是自增的主键，full_name表示用户的全名，username表示用户名，password表示密码，email表示电子邮件地址。


> 这张表的UID为所有用户行为相关表的交集，十分重要


## Table banned_users

UID为用户ID，是users表中的主键，is_banned表示是否被封禁，初始值为FALSE。此外，还添加了一个外键约束，确保UID在users表中存在。

demo: 一键封号功能

```sql
UPDATE banned_users SET is_banned = TRUE WHERE UID = 1;
```

demo: 查询用户是否被封号

```sql
SELECT is_banned FROM banned_users WHERE UID = 1;
```

demo: 查询所有变成封号斗罗的用户

```sql
SELECT * FROM banned_users WHERE is_banned = TRUE;
```




## Table user_info

UID为用户ID，是users表中的主键，age表示用户年龄，gender表示用户性别，address表示用户地址，phone_number表示用户电话号码，nickname表示用户昵称。此外，还添加了一个外键约束，确保UID在users表中存在。




## Table auth_info

其中，UID为用户ID，是users表中的主键，password表示用户密码，force_change_password表示是否需要强制更改密码，allow_password_auth表示是否允许密码验证。此外，还添加了一个外键约束，确保UID在users表中存在。


demo: 禁止使用密码验证

```sql
UPDATE auth_info SET allow_password_auth = FALSE WHERE UID = 1;

```

demo: 强制某个用户在第一次登录时更改密码

```sql
UPDATE auth_info SET force_change_password = TRUE WHERE UID = 1;

```

demo: 查询某个用户的全部认证信息

```sql
SELECT * FROM auth_info WHERE UID = 1;
```





## Table user_group

其中，group_id为用户组ID，是user_group表中的主键，group_name为用户组名称，permission_1、permission_2、permission_3为用户组相关权限。例如，permission_1表示用户组是否具有某种权限1，permission_2表示用户组是否具有某种权限2，permission_3表示用户组是否具有某种权限3。


demo: 添加用户组

```
INSERT INTO user_group (group_id, group_name, permission_1, permission_2, permission_3) VALUES (1, 'admins', TRUE, TRUE, FALSE);

```


demo: 更新用户组权限

```sql
UPDATE user_group SET permission_1 = FALSE, permission_2 = TRUE, permission_3 = TRUE WHERE group_id = 1;

```
