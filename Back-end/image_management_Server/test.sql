# CREATE TABLE `File_share` (
#     `Share_ID` bigint NOT NULL AUTO_INCREMENT,
#     `path_sha256` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
#     `password` varchar(100) DEFAULT NULL,
#     `sharer_UID` int NOT NULL,
#     `guid` varchar(100) NOT NULL,
#     `folder_owner` json DEFAULT NULL,
#     `folder_guest_r` json DEFAULT NULL,
#     `folder_guest_rw` json DEFAULT NULL,
#     `folder_guest_rwd` json DEFAULT NULL,
#     PRIMARY KEY (`Share_ID`)
#   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='';
# [
#     {
#       folder_guest_r: '["user_3", "user_4"]',
#       folder_guest_rw: '["user_3", "user_4"]',
#       folder_guest_rwd: '["user_3", "user_4"]'
#     },
#     {
#       folder_guest_r: '["user_1", "user_2"]',
#       folder_guest_rw: '["user_3", "user_4"]',
#       folder_guest_rwd: '["user_3", "user_4"]'
#     }
# ]
# let sql=`SELECT folder_guest_r,folder_guest_rw,folder_aguest_rwd FROM File_share`;

/* Share_ID|path_sha256|password|sharer_UID|guid  |folder_owner|folder_guest_r      |folder_guest_rw     |folder_guest_rwd    |
--------+-----------+--------+----------+------+------------+--------------------+--------------------+--------------------+
       1|sha1       |        |         3|12312c|            |["user_3", "user_4"]|["user_3", "user_4"]|["user_3", "user_4"]|
       2|sha2       |        |         3|1231c |            |["user_1", "user_2"]|["user_3", "user_4"]|["user_3", "user_4"]| */