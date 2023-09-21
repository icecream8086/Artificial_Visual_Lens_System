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
const getFileAttributes = require('../../lib/life_cycle/FileAttributes');
const {bytesToMB } = require('../../lib/datasource/other');
const fs = require('fs');
const multer = require('multer');


// 配置multer
const storage_demo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './File_Stream/File_Block'); // 设置文件保存的路径
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // 设置文件保存时的文件名
  }
});

const upload = multer({ storage: storage_demo });


router.post('/uploadFile', upload.single('files'), async (req, res, next) => {

  // let UID = req.headers.uid;
  // let token = req.headers.token;
  sql='';
  try {
    // await validateToken(token, UID);

    let type_isimage = await checkFileType(req.file?.path);

    if (type_isimage) {
      let hash = await getImageHash(req.file?.path);
      console.log(hash);
      
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
  try{
    const filename = req.params.filename;
    const file = path.join('File_Stream', 'File_Block', filename);
    res.download(file, (err) => {
      if (err) {
        console.error('Error during download:', err);
        res.status(404).send('File not found');
      }
    });
  
  }catch(err){
    return res.status(401).json({ message: err.message });
  }
});

router.post('/downloadFile_share', async (req, res, next) => {
  try{
    const filename = req.params.filename;
    const file = path.join('File_Stream', 'File_Block', filename);
    res.download(file, (err) => {
      if (err) {
        console.error('Error during download:', err);
        res.status(404).send('File not found');
      }
    });
  
  }catch(err){
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



module.exports = router;
