/* 文件信息
        格式
        大小
        模式
        修改时间
        访问时间
        创建时间
        文件大小
        磁盘使用量
        路径 */

CREATE TABLE file_info (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    sha256 VARCHAR(64) NOT NULL,
    format VARCHAR(20) NOT NULL,
    size BIGINT NOT NULL,
    mode VARCHAR(10) NOT NULL,
    mod_time DATETIME NOT NULL,
    access_time DATETIME NOT NULL,
    create_time DATETIME NOT NULL,
    file_size BIGINT NOT NULL,
    disk_usage BIGINT NOT NULL,
    path VARCHAR(255) NOT NULL
);

/* insert data */

INSERT INTO file_info (sha256, format, size, mode, mod_time, access_time, create_time, file_size, disk_usage, path)
VALUES ('your_sha256', 'your_format', your_size, 'your_mode', 'your_mod_time', 'your_access_time', 'your_create_time', your_file_size, your_disk_usage, 'your_path');

/* select data */
SELECT * FROM file_info WHERE sha256 = 'your_sha256';

/* update data */
UPDATE file_info SET format = 'new_format', size = new_size, path = 'new_path' WHERE sha256 = 'your_sha256';

/* delete data */
DELETE FROM file_info WHERE sha256 = 'your_sha256';

/* 说明
        标题
        主题
        分级
        标记
        备注 */

CREATE TABLE documents (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
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

CREATE TABLE advanced_photos (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
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
        35mm 等效光圈
        35mm 等效最大光圈
        35mm 等效最小光圈
        35mm 等效焦距 */

CREATE TABLE cameras (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
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
    equivalent_focal_length_35mm DECIMAL(5, 2),
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
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    sha256 VARCHAR(64) NOT NULL,
    author_uid VARCHAR(100),
    capture_date DATE,
    program_name VARCHAR(100),
    acquire_date DATE,
    copyright VARCHAR(100)
);
