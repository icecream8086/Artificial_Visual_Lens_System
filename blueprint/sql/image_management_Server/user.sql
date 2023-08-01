/* sql table structure  */

/* useage = "用户表" */
CREATE TABLE IF NOT EXISTS users (
  UID INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255),
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255),
  email VARCHAR(255)
);  
/* end */

/* useage="用户封禁状态表" */
CREATE TABLE IF NOT EXISTS banned_users (
  UID INT PRIMARY KEY,
  is_banned BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (UID) REFERENCES users (UID)
);
/* end */

/* useage = "用户信息表" */
CREATE TABLE IF NOT EXISTS user_info (
  UID INT PRIMARY KEY,
  age INT,
  gender VARCHAR(10),
  address VARCHAR(255),
  phone_number VARCHAR(20),
  nickname VARCHAR(255),
  FOREIGN KEY (UID) REFERENCES users (UID)
);
/* end */

/* useage = "登录信息表" */
CREATE TABLE auth_info (
  UID INT PRIMARY KEY,
  password VARCHAR(255) DEFAULT NULL,
  force_change_password BOOLEAN DEFAULT TRUE,
  allow_password_auth BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (UID) REFERENCES users (UID)
);
/* end */

/* useage = "用户组" */

CREATE TABLE user_group (
  group_id INT PRIMARY KEY,
  group_name VARCHAR(255),
  READ BOOLEAN DEFAULT TRUE,
  WRITE BOOLEAN DEFAULT TRUE,
  EXECUTE BOOLEAN DEFAULT TRUE,
  Full_Control BOOLEAN DEFAULT FALSE,
  BASIC_CONTROL BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (group_id) REFERENCES users (UID)
);
/* Full_Control 表示用户组是否拥有完全控制权限，即可以对该用户组拥有的资源进行任何操作，包括读取、写入、删除、创建和修改等(包括服务器资源)。 */
/* BASIC_CONTROL 表示用户组是否拥有特定控制权限，即可以对该用户组拥有的资源进行特定操作，但不具备完全控制权限。(不包括服务器资源) */
/* 更细粒度的权限控制不好弄了艹  */
/* end */

