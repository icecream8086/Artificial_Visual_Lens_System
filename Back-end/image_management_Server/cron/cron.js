// CREATE TABLE `link_info_file` (
//     `sha256` varchar(64) NOT NULL,
//     `unlink` tinyint(1) NOT NULL DEFAULT '0',
//     PRIMARY KEY (`sha256`),
//     UNIQUE KEY `link_info_UN` (`sha256`),
//     CONSTRAINT `link_info_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

// CREATE TABLE `File_Permission` (
//     `sha256` varchar(64) NOT NULL,
//     `UID` int DEFAULT NULL,
//     `GroupID` int DEFAULT NULL,
//     `PermissionID` int DEFAULT NULL,
//     `Priority` int DEFAULT NULL,
//     PRIMARY KEY (`sha256`),
//     UNIQUE KEY `File_Permission_UN` (`sha256`),
//     KEY `GroupID` (`GroupID`),
//     KEY `File_Permission_ibfk_4` (`PermissionID`),
//     KEY `File_Permission_FK_1` (`UID`),
//     CONSTRAINT `File_Permission_FK` FOREIGN KEY (`sha256`) REFERENCES `Files` (`sha256`) ON DELETE CASCADE ON UPDATE CASCADE,
//     CONSTRAINT `File_Permission_FK_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;