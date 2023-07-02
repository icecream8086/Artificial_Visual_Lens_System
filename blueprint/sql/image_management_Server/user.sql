/* sql table structure  */


CREATE TABLE IF NOT EXISTS users (
  UID INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255),
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255),
  email VARCHAR(255)
);  

CREATE TABLE IF NOT EXISTS banned_users (
  UID INT PRIMARY KEY,
  is_banned BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (UID) REFERENCES users (UID)
);

CREATE TABLE IF NOT EXISTS user_info (
  UID INT PRIMARY KEY,
  age INT,
  gender VARCHAR(10),
  address VARCHAR(255),
  phone_number VARCHAR(20),
  nickname VARCHAR(255),
  FOREIGN KEY (UID) REFERENCES users (UID)
);

CREATE TABLE auth_info (
  UID INT PRIMARY KEY,
  password VARCHAR(255) DEFAULT NULL,
  force_change_password BOOLEAN DEFAULT TRUE,
  allow_password_auth BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (UID) REFERENCES users (UID)
);

CREATE TABLE user_group (
  group_id INT PRIMARY KEY,
  group_name VARCHAR(255),
  permission_1 BOOLEAN DEFAULT FALSE,
  permission_2 BOOLEAN DEFAULT FALSE,
  permission_3 BOOLEAN DEFAULT FALSE,
  permission_4 BOOLEAN DEFAULT FALSE,
);
