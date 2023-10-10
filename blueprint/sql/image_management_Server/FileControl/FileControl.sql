CREATE TABLE Files (
    sha256 VARCHAR(64),
    FileName VARCHAR(255),
    FolderID BIGINT,
    PRIMARY KEY (sha256)
);

CREATE TABLE Folders (
    sha256 VARCHAR(64),
    FolderID BIGINT,
    FolderName VARCHAR(255),
    PRIMARY KEY (FolderID)
);


CREATE TABLE Permissions (
    PermissionID INT,
    PermissionName VARCHAR(255),
    PRIMARY KEY (PermissionID)
);

CREATE TABLE File_Permission (
    sha256 VARCHAR(64),
    UID INT,
    GroupID INT,
    PermissionID INT,
    Priority INT,
    PRIMARY KEY (sha256, UID, GroupID, PermissionID),
    FOREIGN KEY (sha256) REFERENCES Files(sha256),
    FOREIGN KEY (UID) REFERENCES users (uid),
    FOREIGN KEY (GroupID) REFERENCES user_group (group_id ),
    FOREIGN KEY (PermissionID) REFERENCES Permissions(PermissionID)
);

CREATE TABLE Folder_Permission (
    sha256 VARCHAR(64),
    FolderID BIGINT,
    UID INT,
    GroupID INT,
    PermissionID INT,
    Priority INT,
    PRIMARY KEY (FolderID, UID, GroupID, PermissionID),
    FOREIGN KEY (FolderID) REFERENCES Folders(FolderID),
    FOREIGN KEY (UID) REFERENCES users (uid),
    FOREIGN KEY (GroupID) REFERENCES user_group (group_id ),
    FOREIGN KEY (PermissionID) REFERENCES Permissions(PermissionID)
);

CREATE TABLE GroupPermissions (
    FolderID BIGINT,
    GroupID INT,
    PermissionID INT,
    Priority INT,
    PRIMARY KEY (FolderID, GroupID, PermissionID),
    FOREIGN KEY (FolderID) REFERENCES Folders(FolderID),
    FOREIGN KEY (GroupID) REFERENCES user_group (group_id ),
    FOREIGN KEY (PermissionID) REFERENCES Permissions(PermissionID)
);