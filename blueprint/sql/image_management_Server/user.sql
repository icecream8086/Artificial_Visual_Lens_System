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
CREATE TABLE IF NOT EXISTS auth_info (
  UID INT PRIMARY KEY,
  password VARCHAR(255) DEFAULT NULL,
  force_change_password BOOLEAN DEFAULT TRUE,
  allow_password_auth BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (UID) REFERENCES users (UID)
);
/* end */

/* useage = "用户权限表" */
CREATE TABLE IF NOT EXISTS user_access_info (
  UID INT,
  group_id INT DEFAULT 4,
  FOREIGN KEY (UID) REFERENCES users (UID),
  FOREIGN KEY (group_id) REFERENCES user_group (group_id),
  PRIMARY KEY (UID, group_id)
);

/* end */

/* useage = "用户组" */
CREATE TABLE IF NOT EXISTS user_group  (
  group_id INT PRIMARY KEY,
  group_name VARCHAR(255),
  READ_A BOOLEAN DEFAULT TRUE,
  WRITE_A BOOLEAN DEFAULT TRUE,
  EXECUTE_A BOOLEAN DEFAULT TRUE,
  Full_Control_A BOOLEAN DEFAULT FALSE,
  BASIC_CONTROL_A BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (group_id)
);
/* end */


/* end */
/* 7个布尔值的排列组合，每个布尔值都有两种可能性，总的排列组合数为2的7次方，即2^7 = 128 种可能性 */
/* group_id 前128位为保留地址 */
 /* 为了避免可能和系统组冲突,自定义用户在128之后开始(理论上有重复，方便划分) */
INSERT INTO user_group (group_id, group_name, READ_A, WRITE_A, EXECUTE_A, Full_Control_A, BASIC_CONTROL_A)
VALUES (1, 'admin', TRUE, TRUE, TRUE, TRUE, TRUE);

INSERT INTO user_group (group_id, group_name, READ_A, WRITE_A, EXECUTE_A, Full_Control_A, BASIC_CONTROL_A)
VALUES (3, 'group_admin', TRUE, TRUE, FALSE, FALSE, FALSE);

INSERT INTO user_group (group_id, group_name, READ_A, WRITE_A, EXECUTE_A, Full_Control_A, BASIC_CONTROL_A)
VALUES (4, 'user', TRUE, TRUE, TRUE, FALSE, FALSE);

INSERT INTO user_group (group_id, group_name, READ_A, WRITE_A, EXECUTE_A, Full_Control_A, BASIC_CONTROL_A)
VALUES (5, 'guest', TRUE, FALSE, FALSE, FALSE, FALSE);

/* end */

/* Full_Control 表示用户组是否拥有完全控制权限，即可以对该用户组拥有的资源进行任何操作，包括读取、写入、删除、创建和修改等(包括服务器资源)。 */
/* BASIC_CONTROL 表示用户组是否拥有特定控制权限，即可以对该用户组拥有的资源进行特定操作，但不具备完全控制权限。(不包括服务器资源) */
/* 更细粒度的权限控制不好弄了艹  */
/* end */

