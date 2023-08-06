

/* 

〇 id：唯一标识每个历史版本记录的ID。
〇 file_id：关联到file_info表的id，表示文件ID。
〇 version_name：历史版本的名称。
〇 modification_date：历史版本的修改日期。
〇 sha256：历史版本的SHA-256哈希值。

 */
CREATE TABLE IF NOT EXISTS history_version (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  file_sha256 VARCHAR(64) NOT NULL,
  version_name VARCHAR(255) NOT NULL,
  modification_date DATETIME NOT NULL,
  sha256 VARCHAR(64) NOT NULL,
  FOREIGN KEY (file_sha256) REFERENCES file_info (sha256)
);



/* 每当文件的SHA-256哈希值发生变化时，就会将该版本的信息插入到history_version表中，以便记录历史版本的修改。 */

INSERT INTO history_version (file_id, version_name, modification_date, sha256)
SELECT id, '版本名称', CURRENT_TIMESTAMP, sha256
FROM file_info
WHERE sha256 = '旧的SHA-256哈希值' AND id = '文件ID';
