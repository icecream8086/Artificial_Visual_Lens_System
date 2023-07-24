/* 
id：唯一标识每个权限记录的ID。
user_id：关联到users表的UID，表示用户ID。
file_id：关联到file_info表的id，表示文件ID。
*_access：表示权限，每个图像对象的info来自，创建时的user_group表的权限。 */
CREATE TABLE image_access_info (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    file_id BIGINT NOT NULL,
    read_access BOOLEAN DEFAULT TRUE,
    write_access BOOLEAN DEFAULT TRUE,
    delete_access BOOLEAN DEFAULT TRUE,
    create_access BOOLEAN DEFAULT TRUE,
    modify_access BOOLEAN DEFAULT TRUE,
    full_control BOOLEAN DEFAULT FALSE,
    specific_control BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users (UID),
    FOREIGN KEY (file_id) REFERENCES file_info (id)
);



/* 

〇 id：唯一标识每个历史版本记录的ID。
〇 file_id：关联到file_info表的id，表示文件ID。
〇 version_name：历史版本的名称。
〇 modification_date：历史版本的修改日期。
〇 sha256：历史版本的SHA-256哈希值。

 */
CREATE TABLE history_version (
id BIGINT PRIMARY KEY AUTO_INCREMENT,
file_id BIGINT NOT NULL,
version_name VARCHAR(255) NOT NULL,
modification_date DATETIME NOT NULL,
sha256 VARCHAR(64) NOT NULL,
FOREIGN KEY (file_id) REFERENCES file_info (id)
);

/* 每当文件的SHA-256哈希值发生变化时，就会将该版本的信息插入到history_version表中，以便记录历史版本的修改。 */

INSERT INTO history_version (file_id, version_name, modification_date, sha256)
SELECT id, '版本名称', CURRENT_TIMESTAMP, sha256
FROM file_info
WHERE sha256 = '旧的SHA-256哈希值' AND id = '文件ID';
