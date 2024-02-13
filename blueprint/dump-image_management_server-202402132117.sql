-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 192.168.1.100    Database: image_management_server
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `File_Permission`
--

DROP TABLE IF EXISTS `File_Permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `File_Permission` (
  `sha256` varchar(64) NOT NULL,
  `UID` int DEFAULT NULL,
  `GroupID` int DEFAULT NULL,
  `PermissionID` int DEFAULT NULL,
  `Priority` int DEFAULT NULL,
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `File_Permission_UN` (`sha256`),
  KEY `GroupID` (`GroupID`),
  KEY `File_Permission_ibfk_4` (`PermissionID`),
  KEY `File_Permission_FK_1` (`UID`),
  CONSTRAINT `File_Permission_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `File_Permission_FK_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `File_share`
--

DROP TABLE IF EXISTS `File_share`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `File_share` (
  `Share_ID` bigint NOT NULL AUTO_INCREMENT,
  `path_sha256` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `password` varchar(100) DEFAULT NULL,
  `sharer_UID` int NOT NULL,
  `guid` varchar(100) NOT NULL,
  `permissions` json DEFAULT NULL COMMENT '[{''uid'':3}{''execute'': 3, ''write'': 3, ''read'': 3},{''uid'':4}{''execute'': 3, ''write'': 3, ''read'': 3}]',
  PRIMARY KEY (`Share_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='通过扫描permissions确定权限\r\n通过owner_list确定所有者';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Files`
--

DROP TABLE IF EXISTS `Files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Files` (
  `sha256` varchar(64) NOT NULL,
  `FileName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Path` longtext NOT NULL,
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `Files_UN` (`sha256`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `file_tigger` AFTER INSERT ON `Files` FOR EACH ROW BEGIN 
INSERT INTO File_Permission (sha256)
  SELECT NEW.sha256
	  WHERE NOT EXISTS (
	    SELECT 1 FROM File_Permission WHERE sha256 = NEW.sha256
	  );
 INSERT INTO delete_info_file (sha256)
  SELECT NEW.sha256
	  WHERE NOT EXISTS (
	    SELECT 1 FROM delete_info_file WHERE sha256 = NEW.sha256
	  );
  INSERT INTO documents_file (sha256)
	  SELECT NEW.sha256
		  WHERE NOT EXISTS (
		    SELECT 1 FROM documents_file WHERE sha256 = NEW.sha256
		  );
  INSERT INTO file_info (sha256)
	  SELECT NEW.sha256
		  WHERE NOT EXISTS (
		    SELECT 1 FROM file_info WHERE sha256 = NEW.sha256
		  );
  INSERT INTO link_info_file (sha256)
	  SELECT NEW.sha256
		  WHERE NOT EXISTS (
		    SELECT 1 FROM link_info_file WHERE sha256 = NEW.sha256
		  );
  INSERT INTO sources_file (sha256)
	  SELECT NEW.sha256
		  WHERE NOT EXISTS (
		    SELECT 1 FROM sources_file WHERE sha256 = NEW.sha256
		  );
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Folder_Permission`
--

DROP TABLE IF EXISTS `Folder_Permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Folder_Permission` (
  `sha256` varchar(64) NOT NULL,
  `FolderID` bigint NOT NULL,
  `UID` int DEFAULT NULL,
  `GroupID` int DEFAULT NULL,
  `PermissionID` int DEFAULT NULL,
  `Priority` int DEFAULT NULL,
  `permission_group` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '{''uid'':4,permission:[{''execute'': 3, ''write'': 3, ''read'': 3}]}',
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `Folder_Permission_UN` (`sha256`),
  KEY `UID` (`UID`),
  KEY `GroupID` (`GroupID`),
  KEY `PermissionID` (`PermissionID`),
  CONSTRAINT `Folder_Permission_FK` FOREIGN KEY (`sha256`) REFERENCES `Folders` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Folder_Permission_ibfk_2` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`),
  CONSTRAINT `Folder_Permission_ibfk_3` FOREIGN KEY (`GroupID`) REFERENCES `user_group` (`group_id`),
  CONSTRAINT `Folder_Permission_ibfk_4` FOREIGN KEY (`PermissionID`) REFERENCES `Permissions` (`PermissionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Folders`
--

DROP TABLE IF EXISTS `Folders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Folders` (
  `sha256` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `FolderID` bigint NOT NULL AUTO_INCREMENT,
  `FolderName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Path` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dataset_zone` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否同步标记',
  `size` bigint NOT NULL DEFAULT '0' COMMENT '文件夹大小',
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `Folders_UN` (`FolderID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `folder_tigger` AFTER INSERT ON `Folders` FOR EACH ROW BEGIN 
  INSERT INTO Folder_Permission (FolderID,sha256) VALUES (NEW.FolderID,NEW.sha256);
  INSERT INTO delete_info_folder (sha256) VALUES (NEW.sha256);
  INSERT INTO documents_folder (sha256) VALUES (NEW.sha256);
  INSERT INTO link_info_folder (sha256) VALUES (NEW.sha256);

 END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `GroupPermissions`
--

DROP TABLE IF EXISTS `GroupPermissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `GroupPermissions` (
  `FolderID` bigint NOT NULL,
  `GroupID` int NOT NULL,
  `PermissionID` int NOT NULL,
  `Priority` int DEFAULT NULL,
  PRIMARY KEY (`FolderID`,`GroupID`,`PermissionID`),
  KEY `GroupID` (`GroupID`),
  KEY `PermissionID` (`PermissionID`),
  CONSTRAINT `GroupPermissions_ibfk_2` FOREIGN KEY (`GroupID`) REFERENCES `user_group` (`group_id`),
  CONSTRAINT `GroupPermissions_ibfk_3` FOREIGN KEY (`PermissionID`) REFERENCES `Permissions` (`PermissionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Model_Access`
--

DROP TABLE IF EXISTS `Model_Access`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Model_Access` (
  `UID` int NOT NULL,
  `GroupID` int NOT NULL,
  `PermissionID` int NOT NULL,
  `Priority` int DEFAULT NULL,
  PRIMARY KEY (`UID`),
  KEY `GroupID` (`GroupID`) USING BTREE,
  KEY `PermissionID` (`PermissionID`) USING BTREE,
  KEY `UID` (`UID`) USING BTREE,
  CONSTRAINT `Model_Access_FK` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Permissions`
--

DROP TABLE IF EXISTS `Permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Permissions` (
  `PermissionID` int NOT NULL,
  `PermissionName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PermissionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Silenced_user`
--

DROP TABLE IF EXISTS `Silenced_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Silenced_user` (
  `UID` int NOT NULL,
  `shutup` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`UID`),
  KEY `idx_uid` (`UID`) USING BTREE,
  CONSTRAINT `banned_users_ibfk_1_copy_copy` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Redis广播功能黑名单';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary view structure for view `View_1700384133383_p76q1udo8e`
--

DROP TABLE IF EXISTS `View_1700384133383_p76q1udo8e`;
/*!50001 DROP VIEW IF EXISTS `View_1700384133383_p76q1udo8e`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `View_1700384133383_p76q1udo8e` AS SELECT 
 1 AS `sha256`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `View_1700384235018_alj07fyb1yv`
--

DROP TABLE IF EXISTS `View_1700384235018_alj07fyb1yv`;
/*!50001 DROP VIEW IF EXISTS `View_1700384235018_alj07fyb1yv`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `View_1700384235018_alj07fyb1yv` AS SELECT 
 1 AS `sha256`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `auth_info`
--

DROP TABLE IF EXISTS `auth_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_info` (
  `UID` int NOT NULL,
  `force_change_password` tinyint(1) DEFAULT '0',
  `allow_password_auth` tinyint(1) DEFAULT '1',
  `flush_token` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`UID`),
  CONSTRAINT `auth_info_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `banned_users`
--

DROP TABLE IF EXISTS `banned_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banned_users` (
  `UID` int NOT NULL,
  `is_banned` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`UID`),
  KEY `idx_uid` (`UID`),
  CONSTRAINT `banned_users_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `delete_info_file`
--

DROP TABLE IF EXISTS `delete_info_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delete_info_file` (
  `sha256` varchar(64) NOT NULL,
  `isdelete` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `delete_info_UN` (`sha256`),
  CONSTRAINT `delete_info_file_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `delete_info_folder`
--

DROP TABLE IF EXISTS `delete_info_folder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delete_info_folder` (
  `sha256` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `isdelete` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `delete_info_UN` (`sha256`),
  CONSTRAINT `delete_info_folder_FK` FOREIGN KEY (`sha256`) REFERENCES `Folders` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `documents_file`
--

DROP TABLE IF EXISTS `documents_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents_file` (
  `sha256` varchar(64) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `classification` varchar(50) DEFAULT NULL,
  `label` varchar(50) DEFAULT NULL,
  `remarks` text,
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `documents_UN` (`sha256`),
  CONSTRAINT `documents_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `documents_folder`
--

DROP TABLE IF EXISTS `documents_folder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents_folder` (
  `sha256` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `subject` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `classification` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `label` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `remarks` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  UNIQUE KEY `documents_UN` (`sha256`),
  CONSTRAINT `documents_folder_FK` FOREIGN KEY (`sha256`) REFERENCES `Folders` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `edges`
--

DROP TABLE IF EXISTS `edges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `edges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `from_node_id` int DEFAULT NULL,
  `to_node_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `from_node_id` (`from_node_id`),
  KEY `to_node_id` (`to_node_id`),
  CONSTRAINT `edges_ibfk_1` FOREIGN KEY (`from_node_id`) REFERENCES `nodes` (`id`),
  CONSTRAINT `edges_ibfk_2` FOREIGN KEY (`to_node_id`) REFERENCES `nodes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `file_info`
--

DROP TABLE IF EXISTS `file_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file_info` (
  `sha256` varchar(64) NOT NULL,
  `format` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `size` bigint DEFAULT NULL,
  `mode` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `mod_time` datetime DEFAULT NULL,
  `access_time` datetime DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `file_size` bigint DEFAULT NULL,
  `disk_usage` bigint DEFAULT NULL,
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `owner_uid` int DEFAULT NULL,
  UNIQUE KEY `file_info_UN` (`sha256`),
  KEY `owner_uid` (`owner_uid`),
  KEY `idx_file_info_sha256` (`sha256`),
  CONSTRAINT `file_info_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `file_ownership`
--

DROP TABLE IF EXISTS `file_ownership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file_ownership` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sha256` varchar(64) NOT NULL,
  `owner_uid` int NOT NULL,
  `group_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_uid` (`owner_uid`),
  KEY `group_id` (`group_id`),
  KEY `file_ownership_FK` (`sha256`),
  CONSTRAINT `file_ownership_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `file_ownership_ibfk_1` FOREIGN KEY (`sha256`) REFERENCES `file_info` (`sha256`),
  CONSTRAINT `file_ownership_ibfk_2` FOREIGN KEY (`owner_uid`) REFERENCES `users` (`UID`),
  CONSTRAINT `file_ownership_ibfk_3` FOREIGN KEY (`group_id`) REFERENCES `user_group` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `link_info_file`
--

DROP TABLE IF EXISTS `link_info_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `link_info_file` (
  `sha256` varchar(64) NOT NULL,
  `unlink` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `link_info_UN` (`sha256`),
  CONSTRAINT `link_info_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `link_info_folder`
--

DROP TABLE IF EXISTS `link_info_folder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `link_info_folder` (
  `sha256` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `unlink` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`sha256`),
  UNIQUE KEY `link_info_UN` (`sha256`),
  CONSTRAINT `link_info_folder_FK` FOREIGN KEY (`sha256`) REFERENCES `Folders` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `my_frequency`
--

DROP TABLE IF EXISTS `my_frequency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_frequency` (
  `frequencyID` bigint NOT NULL AUTO_INCREMENT,
  `UID` varchar(100) DEFAULT NULL,
  `Group_ID` varchar(100) DEFAULT NULL,
  `frequency` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `timeout` bigint DEFAULT NULL,
  PRIMARY KEY (`frequencyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Redis广播频道';
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `set_timeout` BEFORE INSERT ON `my_frequency` FOR EACH ROW BEGIN
  IF NEW.timeout IS NULL THEN
    SET NEW.timeout = NULL;
  ELSE
    SET NEW.timeout = UNIX_TIMESTAMP() + NEW.timeout;
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `nodes`
--

DROP TABLE IF EXISTS `nodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nodes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `permissions` json NOT NULL,
  `priority` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner` (
  `id` int NOT NULL,
  `file_ownership_id` int NOT NULL AUTO_INCREMENT,
  `owner_uid` int NOT NULL,
  `shared_with_uid` int DEFAULT NULL,
  PRIMARY KEY (`file_ownership_id`),
  KEY `owner_uid` (`owner_uid`),
  KEY `owner_ibfk_3` (`shared_with_uid`),
  CONSTRAINT `owner_ibfk_2` FOREIGN KEY (`owner_uid`) REFERENCES `users` (`UID`),
  CONSTRAINT `owner_ibfk_3` FOREIGN KEY (`shared_with_uid`) REFERENCES `users` (`UID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `permission_edges`
--

DROP TABLE IF EXISTS `permission_edges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission_edges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `from_node_id` int DEFAULT NULL,
  `to_node_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `from_node_id` (`from_node_id`),
  KEY `to_node_id` (`to_node_id`),
  CONSTRAINT `permission_edges_ibfk_1` FOREIGN KEY (`from_node_id`) REFERENCES `permission_nodes` (`id`),
  CONSTRAINT `permission_edges_ibfk_2` FOREIGN KEY (`to_node_id`) REFERENCES `permission_nodes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `permission_group`
--

DROP TABLE IF EXISTS `permission_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission_group` (
  `permission_id` bigint NOT NULL AUTO_INCREMENT,
  `permission_group` longtext,
  PRIMARY KEY (`permission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `permission_nodes`
--

DROP TABLE IF EXISTS `permission_nodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission_nodes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `permissions` json NOT NULL,
  `priority` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `safe_auth`
--

DROP TABLE IF EXISTS `safe_auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `safe_auth` (
  `UID` int NOT NULL,
  `save_auth` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`UID`),
  KEY `idx_uid` (`UID`) USING BTREE,
  CONSTRAINT `banned_users_ibfk_1_copy` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sources_file`
--

DROP TABLE IF EXISTS `sources_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sources_file` (
  `sha256` varchar(64) NOT NULL,
  `author_uid` varchar(100) DEFAULT NULL,
  `capture_date` date DEFAULT NULL,
  `program_name` varchar(100) DEFAULT NULL,
  `acquire_date` date DEFAULT NULL,
  `copy_right` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`sha256`),
  CONSTRAINT `sources_file_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_access_info`
--

DROP TABLE IF EXISTS `user_access_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_access_info` (
  `UID` int NOT NULL,
  `group_id` int NOT NULL DEFAULT '4',
  `user_permission` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`UID`,`group_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `user_access_info_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`),
  CONSTRAINT `user_access_info_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `user_group` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_access_info_White_LIST`
--

DROP TABLE IF EXISTS `user_access_info_White_LIST`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_access_info_White_LIST` (
  `UID` int NOT NULL,
  `group_id` int NOT NULL DEFAULT '4',
  `Access_ID` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`Access_ID`),
  KEY `group_id` (`group_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_group`
--

DROP TABLE IF EXISTS `user_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_group` (
  `group_id` int NOT NULL,
  `group_name` varchar(255) DEFAULT NULL,
  `READ_A` tinyint(1) DEFAULT '1',
  `WRITE_A` tinyint(1) DEFAULT '1',
  `EXECUTE_A` tinyint(1) DEFAULT '1',
  `Full_Control_A` tinyint(1) DEFAULT '0',
  `BASIC_CONTROL_A` tinyint(1) DEFAULT '0',
  `group_permission_name` longtext,
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `user_group_UN` (`group_id`),
  KEY `idx_group_id` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='''A'', {''read'': 1,priority:1}';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `UID` int NOT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UID`),
  CONSTRAINT `user_info_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `UID` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UID`),
  KEY `idx_username` (`username`),
  KEY `idx_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`%`*/ /*!50003 TRIGGER `user_insert` AFTER INSERT ON `users` FOR EACH ROW BEGIN
  INSERT INTO auth_info (UID) VALUES (NEW.UID);
  INSERT INTO banned_users (UID) VALUES (NEW.UID);
  INSERT INTO user_access_info (UID) VALUES (NEW.UID);
  INSERT INTO user_info (UID) VALUES (NEW.UID);
  INSERT INTO Silenced_user (UID) VALUES (NEW.UID);
  INSERT INTO safe_auth (UID) VALUES (NEW.UID);

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping events for database 'image_management_server'
--
/*!50106 SET @save_time_zone= @@TIME_ZONE */ ;
/*!50106 DROP EVENT IF EXISTS `clean_expired_data` */;
DELIMITER ;;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;;
/*!50003 SET character_set_client  = utf8mb4 */ ;;
/*!50003 SET character_set_results = utf8mb4 */ ;;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;;
/*!50003 SET @saved_time_zone      = @@time_zone */ ;;
/*!50003 SET time_zone             = 'SYSTEM' */ ;;
/*!50106 CREATE*/ /*!50117 DEFINER=`root`@`%`*/ /*!50106 EVENT `clean_expired_data` ON SCHEDULE EVERY 1 DAY STARTS '2022-01-01 03:00:00' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM my_frequency WHERE timeout IS NOT NULL AND timeout <= UNIX_TIMESTAMP() */ ;;
/*!50003 SET time_zone             = @saved_time_zone */ ;;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;;
/*!50003 SET character_set_client  = @saved_cs_client */ ;;
/*!50003 SET character_set_results = @saved_cs_results */ ;;
/*!50003 SET collation_connection  = @saved_col_connection */ ;;
DELIMITER ;
/*!50106 SET TIME_ZONE= @save_time_zone */ ;

--
-- Dumping routines for database 'image_management_server'
--

--
-- Final view structure for view `View_1700384133383_p76q1udo8e`
--

/*!50001 DROP VIEW IF EXISTS `View_1700384133383_p76q1udo8e`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `View_1700384133383_p76q1udo8e` AS select '33a161678f50aaeb2b5039e75ae238b7324bfc43c5d992fac07a9754728dfbf0' AS `sha256` union all select 'b5355a5e9a347e04464a8825f059dbea4578298b7a9bec5d5c74bf72e29ba9e0' AS `sha256` union all select 'e6cb95712bcb40b2672dd2b2e928d10c09f1782cb90402623eb833275ba4704e' AS `sha256` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `View_1700384235018_alj07fyb1yv`
--

/*!50001 DROP VIEW IF EXISTS `View_1700384235018_alj07fyb1yv`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`%` SQL SECURITY DEFINER */
/*!50001 VIEW `View_1700384235018_alj07fyb1yv` AS select '33a161678f50aaeb2b5039e75ae238b7324bfc43c5d992fac07a9754728dfbf0' AS `sha256` union all select 'b5355a5e9a347e04464a8825f059dbea4578298b7a9bec5d5c74bf72e29ba9e0' AS `sha256` union all select 'e6cb95712bcb40b2672dd2b2e928d10c09f1782cb90402623eb833275ba4704e' AS `sha256` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-13 21:17:21
