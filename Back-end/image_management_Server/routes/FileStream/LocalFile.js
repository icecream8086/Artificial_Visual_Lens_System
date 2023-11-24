// @ts-nocheck
/**
 * Express router for user authentication.
 * @module authRouter
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const validateToken = require('../../lib/logic_module/check_user');
const getImageHash = require('../../lib/hash/sha_256');
const { checkFileType } = require('../../lib/life_cycle/checkFileType');
const {getFileAttributes} = require('../../lib/life_cycle/FileAttributes');
const { bytesToMB } = require('../../lib/datasource/other');
const { getExifData } = require('../../lib/life_cycle/image_exif');
const { register_file,check_sha256_exists,modify_file_permission,modify_file_info,modify_source_file } = require('../../lib/file_system/file');
const { register_folder,check_folder_sha256_exists,split_folder_info } = require('../../lib/file_system/folder');
const { getGroupInfo } = require('../../lib/logic_module/group');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const { has } = require('lodash');
const { group } = require('console');


// 配置multer
const storage_demo = multer.diskStorage({
  destination: function (req, file, cb) {
    let UID = req.headers.uid;
    // let additionalPath = req.body.additionalPath; // 从请求体中获取额外的路径
    let additionalPath = "additionalPath";
    let newPath = `./File_Stream/File_Block/${UID}/${additionalPath}`; // 在UID后面追加新的路径
    fs.mkdirSync(newPath, { recursive: true });
    cb(null, newPath); // 重设文件保存的路径
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // 设置文件保存时的文件名
  }
});

const upload = multer({ storage: storage_demo });


router.post('/uploadFile', async (req, res, next) => {
  let UID = req.headers.uid;
  let token = req.headers.token;
  let hash = '';
  try {
    await validateToken(token, UID);

    const upload = multer({ storage: storage_demo }).single('files');
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }

      //check file type
      let type_isimage = await checkFileType(req.file?.path);
      if (type_isimage) {
         hash = await getImageHash(req.file?.path);
      } else {
        fs.unlink(req.file.path, (err) => {
          if (err) throw err;
        });
        return res.status(401).json({ message: 'File type is not supported.' });
      }
      let originalname = req.file?.originalname;      
      let path = req.file?.path;
      //image attributes
      let imageobj=  await getFileAttributes(path);
      let exifObj = await getExifData(path);
      let group_id = await getGroupInfo(UID);
      group_id = group_id[0].group_id;
      if (await check_sha256_exists(hash)) {
        return res.status(409).json({ message: 'File already exists.' });
      }

      await register_file(hash,originalname,path);
      await modify_file_info(hash,imageobj.format,imageobj.size,imageobj.mode,imageobj.mod_time,imageobj.access_time,imageobj.create_time,imageobj.file_size,imageobj.disk_usage,imageobj.path,UID);
      await modify_file_permission(hash,UID,group_id,permission=2,Priority=1);
      await modify_source_file(hash,UID,exifObj.capture_date,exifObj.program_name,exifObj.acquire_date,exifObj.copy_right);
      let path_result=await split_folder_info(path);
      await register_folder(path_result,UID,group_id,permission=2,Priority=1);
      return res.status(200).json({ result: 'File uploaded successfully.' });

    });
  } catch (err) {
    return res.status(401).json({ message: err.message });
    next(err);
  }
});

router.post('/list_any', async (req, res, next) => {
  let UID = req.headers.uid;
  let token = req.headers.token;
  let path = req.body.path;
  try {
    await validateToken(token, UID);

    /**
     *  return:obj ↓
     */
    // {
    //   "currentPath": "/path/to/currentFolder",
    //   "contents": [
    //     {
    //       "type": "file",
    //       "name": "exampleFile.txt",
    //       "path": "/path/to/currentFolder/exampleFile.txt"
    //     },
    //     {
    //       "type": "folder",
    //       "name": "subFolder",
    //       "path": "/path/to/currentFolder/subFolder"
    //     }
    //   ]
    // }
  } catch (err) {
    return res.status(401).json({ message: err.message });
    next(err);
  }
}
);



router.post('/uploadFile_backup_door', upload.single('files'), async (req, res, next) => {

  // let UID = req.headers.uid;
  // let token = req.headers.token;
  sql = '';
  try {
    // await validateToken(token, UID);

    let type_isimage = true;

    if (type_isimage) {
      let hash = await getImageHash(req.file?.path);
    } else {
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
      });
      return res.status(401).json({ message: 'File type is not supported.' });
    }


    return res.status(200).json({ req: req.file });
    // size == byte
    //   {
    //     "req": {
    //         "fieldname": "files",
    //         "originalname": "Clash.for.Windows.Setup.0.20.35.exe",
    //         "encoding": "7bit",
    //         "mimetype": "application/x-msdos-program",
    //         "destination": "./File_Stream/File_Block",
    //         "filename": "Clash.for.Windows.Setup.0.20.35.exe",
    //         "path": "File_Stream/File_Block/Clash.for.Windows.Setup.0.20.35.exe",
    //         "size": 87163934
    //     }
    // }

  } catch (err) {
    return res.status(401).json({ message: err.message });
    console.error('Error during banned_users:', err);
    next(err);
  }
});

router.post('/downloadFile/:filename', async (req, res, next) => {
  try {
    const filename = req.params.filename;
    const file = path.join('File_Stream', 'File_Block', filename);
    res.download(file, (err) => {
      if (err) {
        console.error('Error during download:', err);
        res.status(404).send('File not found');
      }
    });

  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
});

router.post('/downloadFile_share/:uuid/:filename', async (req, res, next) => {
  try {
    const uuid = req.params.uuid;
    const filename = req.params.filename;
    const file = path.join(__dirname, '..', 'File_Stream', 'File_Block', uuid, filename);
    res.download(file, (err) => {
      if (err) {
        console.error('Error during download:', err);
        res.status(404).send('File not found');
      } else {
        console.log('File downloaded successfully');
      }
    });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
});

router.post('/create_share', async (req, res, next) => {
  const fileDir = path.join(__dirname, 'File_Stream', 'File_Block');
  try {
    const filename = req.body.filename;
    const uuid = req.body.uuid || uuidv4();
    const folderPath = path.join(fileDir, uuid);

    if (!fs.existsSync(folderPath)) {
      // Create new folder with UUID as name
      fs.mkdirSync(folderPath);

      // Copy file to new folder
      const file = path.join(fileDir, filename);
      const newFilePath = path.join(folderPath, filename);
      fs.copyFileSync(file, newFilePath);

    } else {
      // Copy folder to UUID folder
      const sourceFolder = path.join(fileDir, filename);
      const targetFolder = path.join(folderPath, filename);
      fs.copyFileSync(sourceFolder, targetFolder);
    }

    // Get list of files in folder
    const files = fs.readdirSync(folderPath);

    res.send({ uuid, files });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
});

router.post('/deleteFile', async (req, res, next) => {
  const fs = require('fs');
  const path = require('path');

  router.post('/deleteFile', async (req, res, next) => {
    const filename = req.body.filename;
    const file = path.join('File_Stream', 'File_Block', filename);

    fs.unlink(file, (err) => {
      if (err) {
        console.error('Error during file deletion:', err);
        res.status(404).send('File not found');
      } else {
        console.log('File deleted successfully');
        res.send('File deleted successfully');
      }
    });
  });
});



router.post('/deleteFile_share', async (req, res, next) => {
  const fileDir = path.join(__dirname, 'File_Stream', 'File_Block');
  try {
    const uuid = req.body.uuid;
    const folderPath = path.join(fileDir, uuid);

    if (fs.existsSync(folderPath)) {
      // Delete folder
      fs.rmdirSync(folderPath);

      res.send(`File deleted successfully`);
    } else {
      res.status(404).send('File not found');
    }
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
});

// CREATE TABLE file_share_ownership (
//   id INT NOT NULL AUTO_INCREMENT,
//   uuid VARCHAR(255) NOT NULL,
//   uid INT NOT NULL,
//   group_id INT NOT NULL,
//   PRIMARY KEY (id)
// );


// - `id`：关系 ID，自增长整数。
// - `uuid`：文件 UUID，字符串。
// - `uid`：文件所有者的 UID，整数。
// - `group_id`：文件所属的组 ID，整数。

// 以下是创建该表的 SQL 语句：

// ```sql
// CREATE TABLE file_ownership (
//   id INT NOT NULL AUTO_INCREMENT,
//   uuid VARCHAR(255) NOT NULL,
//   uid INT NOT NULL,
//   group_id INT NOT NULL,
//   PRIMARY KEY (id)
// );
// ```

// 使用 `INSERT INTO` 语句将 UUID、UID 和 Group ID 的关系插入到该表中：

// ```sql
// INSERT INTO file_ownership (uuid, uid, group_id)
// VALUES ('<uuid>', <uid>, <group_id>);
// ```

// 使用 `SELECT` 语句检索 UUID、UID 和 Group ID 的关系：

// ```sql
// SELECT * FROM file_ownership WHERE uuid = '<uuid>';
// ```

// 使用 `UPDATE` 语句更新 UUID、UID 和 Group ID 的关系：

// ```sql
// UPDATE file_ownership SET uid = <new_uid>, group_id = <new_group_id> WHERE uuid = '<uuid>' AND uid = <uid> AND group_id = <group_id>;
// ```

// 使用 `DELETE` 语句删除 UUID、UID 和 Group ID 的关系：

// ```sql
// DELETE FROM file_ownership WHERE uuid = '<uuid>' AND uid = <uid> AND group_id = <group_id>;
// ```

module.exports = router;
