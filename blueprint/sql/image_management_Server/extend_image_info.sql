/* useage = "文件信息表"

sha256: 文件的SHA256哈希值。
format: 文件的格式。
size: 文件大小。
mode: 文件的模式。
mod_time: 文件的修改时间。
access_time: 文件的访问时间。
create_time: 文件的创建时间。
file_size: 文件的实际大小。
disk_usage: 文件在磁盘上占用的空间。
path: 文件的路径。
owner_uid: 文件的所有者UID，外键参考自用户表的UID。 
*/

CREATE TABLE IF NOT EXISTS  file_info (
  sha256 VARCHAR(64) NOT NULL,
  format VARCHAR(20) NOT NULL,
  size BIGINT NOT NULL,
  mode VARCHAR(10) NOT NULL,
  mod_time DATETIME NOT NULL,
  access_time DATETIME NOT NULL,
  create_time DATETIME NOT NULL,
  file_size BIGINT NOT NULL,
  disk_usage BIGINT NOT NULL,
  path VARCHAR(255) NOT NULL,
  owner_uid INT NOT NULL,
  FOREIGN KEY (owner_uid) REFERENCES users (UID)
);

CREATE INDEX idx_file_info_sha256 ON file_info (sha256);


CREATE TABLE IF NOT EXISTS  file_ownership (
    id INT PRIMARY KEY AUTO_INCREMENT,
    sha256 VARCHAR(64) NOT NULL,
    owner_uid INT NOT NULL,
    group_id INT,
    FOREIGN KEY (sha256) REFERENCES file_info (sha256),
    FOREIGN KEY (owner_uid) REFERENCES users (UID),
    FOREIGN KEY (group_id) REFERENCES user_group (group_id)
);

CREATE TABLE IF NOT EXISTS owner (
    id INT PRIMARY KEY AUTO_INCREMENT,
    file_ownership_id INT,
    owner_uid INT NOT NULL,
    FOREIGN KEY (file_ownership_id) REFERENCES file_ownership (id),
    FOREIGN KEY (owner_uid) REFERENCES users (UID)
);
/* INSERT INTO owner (file_ownership_id, owner_uid)
VALUES 
    (1, 1001),
    (1, 1002),
    (1, 1003); 
    /* 一对多关系，一个文件可以有多个所有者，一个用户可以有多个文件。 */ 


/* 通过crontab 定时查询需要删除的文件sha256 */
CREATE TABLE IF NOT EXISTS  linkinfo (
    sha256 VARCHAR(64) NOT NULL,
    unlink BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (sha256) REFERENCES file_info (sha256)
);




    

/*path: docs/Back-end/image_management_Server/sqlTable/Chapter_User/File_Access.md */
/* end */

/* 说明
        标题
        主题
        分级
        标记
        备注 */

CREATE TABLE IF NOT EXISTS documents (
    sha256 VARCHAR(64) NOT NULL,
    title VARCHAR(100),
    subject VARCHAR(100),
    classification VARCHAR(50),
    label VARCHAR(50),
    remarks TEXT
);


/* 高级照片
        镜头制造商
        镜头型号
        闪光灯制造商
        闪光灯型号
        照相机序列号
        对比度
        亮度
        光源
        曝光程序
        曝光模式
        饱和度
        清晰度
        白平衡
        光度解释
        数字变焦比例
        数字变焦步长
        数字变焦步数
        闪光灯能量
        EXIF 版本 */

CREATE TABLE IF NOT EXISTS advanced_photos (
    sha256 VARCHAR(64) NOT NULL,
    lens_manufacturer VARCHAR(100),
    lens_model VARCHAR(100),
    flash_manufacturer VARCHAR(100),
    flash_model VARCHAR(100),
    camera_serial_number VARCHAR(100),
    contrast VARCHAR(10),
    brightness VARCHAR(10),
    light_source VARCHAR(50),
    exposure_program VARCHAR(50),
    exposure_mode VARCHAR(50),
    saturation VARCHAR(10),
    sharpness VARCHAR(10),
    white_balance VARCHAR(50),
    light_metering_explanation VARCHAR(255),
    digital_zoom_ratio DECIMAL(10, 2),
    digital_zoom_step DECIMAL(10, 2),
    digital_zoom_steps INT,
    flash_energy DECIMAL(10, 2),
    exif_version VARCHAR(10)
);

/* 照相机
        制造商
        型号
        光圈值
        曝光时间
        ISO 速度
        曝光补偿
        焦距
        最大光圈
        测光模式
        目标距离
        闪光灯模式
        闪光灯强度
        闪光灯状态
        35mm 等效焦距
        35mm 等效最大光圈
        35mm 等效最小光圈
        35mm 等效焦距 */

CREATE TABLE IF NOT EXISTS cameras (
    sha256 VARCHAR(64) NOT NULL,
    manufacturer VARCHAR(100),
    model VARCHAR(100),
    aperture VARCHAR(10),
    exposure_time VARCHAR(10),
    iso_speed INT,
    exposure_compensation DECIMAL(5, 2),
    focal_length DECIMAL(5, 2),
    max_aperture DECIMAL(5, 2),
    metering_mode VARCHAR(50),
    focus_distance DECIMAL(10, 2),
    flash_mode VARCHAR(50),
    flash_intensity DECIMAL(5, 2),
    flash_status VARCHAR(50),
    equivalent_aperture_35mm DECIMAL(5, 2),
    max_aperture_35mm DECIMAL(5, 2),
    min_aperture_35mm DECIMAL(5, 2),
    equivalent_focal_length_35mm DECIMAL(5, 2)
);


/* 来源
    作者 UID
    拍摄日期
    程序名称
    获取日期
    版权 */

CREATE TABLE sources (
    sha256 VARCHAR(64) NOT NULL,
    author_uid VARCHAR(100),
    capture_date DATE,
    program_name VARCHAR(100),
    acquire_date DATE,
    copyright VARCHAR(100)
);



CREATE TABLE IF NOT EXISTS  deleteinfo (
    sha256 VARCHAR(64) NOT NULL,
    isdelete BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (sha256) REFERENCES file_info (sha256)
);
