默认创建者为基本持有者

如何为文件信息表添加多个所有者

```sql
CREATE TABLE file_ownership (
  file_id BIGINT NOT NULL,
  owner_uid INT NOT NULL,
  PRIMARY KEY (file_id, owner_uid),
  FOREIGN KEY (file_id) REFERENCES file_info (id),
  FOREIGN KEY (owner_uid) REFERENCES users (UID)
);
```

在file_ownership表中，使用file_id和owner_uid作为复合主键，file_id列参考自文件信息表的id列，owner_uid列参考自用户表的UID列。

这样，一个文件可以有多个所有者，同时一个所有者也可以拥有多个文件。

查询一个文件的所有者，可以使用以下SQL语句：

```sql
SELECT owner_uid FROM file_ownership WHERE file_id = <file_id>;
```

这条语句将返回指定文件ID的所有者UID。

为文件添加一个新的所有者，可以使用以下SQL语句：

```sql
INSERT INTO file_ownership (file_id, owner_uid) VALUES (<file_id>, <new_owner_uid>);
```

这条语句将在file_ownership表中插入一条新的记录，表示文件ID和新的所有者UID之间的关联关系。

优化建议：
- 为file_ownership表中的file_id和owner_uid列添加索引，以提高查询文件所有者的性能。
- 考虑是否需设置限制条件，例如每个文件最多有多少个所有者。