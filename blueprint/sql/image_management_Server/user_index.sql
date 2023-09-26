/* useage = "索引" */
CREATE INDEX idx_username ON users (username);
CREATE INDEX idx_email ON users (email);
CREATE INDEX idx_uid ON banned_users (UID);
CREATE INDEX idx_group_id ON user_group (group_id);
CREATE INDEX idx_file_info_sha256 ON file_info (sha256);

/* end */