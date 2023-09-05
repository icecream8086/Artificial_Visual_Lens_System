/**
 * Express router for user authentication.
 * @module authRouter
 */

const express = require('express');
const router = express.Router();

const query = require('../../lib/datasource/mysql_connection_promise');  // Database connection
const redis = require('../../lib/datasource/redis_connection_promise'); // Redis connection
const multer = require('multer');
const jwt = require('jsonwebtoken');



// 配置multer
const storage_demo = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './File_Stream/Test/catch'); // 设置文件保存的路径
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // 设置文件保存时的文件名
    }
  });
  
  const upload = multer({ storage: storage_demo });

router.post('/uploadFile',upload.single('files'), async (req, res, next) => {

    let UID;
    const { tokens } = req.headers;
    if (tokens==undefined) {
      return res.status(401).json({ message: 'Token is required.' });
    }
    redis.get(tokens).then((result) => {
      if (result == null) {
        return res.status(401).json({ message: 'Token is invalid.' });
      } else {
        UID = result;
      }
    }).catch((err) => {
      console.log(err);
    });
// Todo 
// selece UID if UID is not exist return 401
// select UserGroup if UserGroup not allow upload return 401
// select FileTypes if FileTypes must be in FileTypes return 401

    
    return res.status(200).json({ message: 'uploadFile Test' });
});

router.post('/downloadFile', async (req, res, next) => {
    

    //
    return res.status(200).json({ message: 'downloadFile Test' });
});

router.post('/deleteFile', async (req, res, next) => {
    let UID;
    const { tokens } = req.headers;
    const { filename } = req.body;
    if (tokens==undefined) {
        return res.status(401).json({ message: 'Token is required.' });
    }
    redis.get(tokens).then((result) => {
        if (result == null) {
            return res.status(401).json({ message: 'Token is invalid.' });
        } else {
            UID = result;
        }
    }).catch((err) => {
        console.log(err);
    });
    // Todo
    // filename
    if (filename == undefined) {
        return res.status(401).json({ message: 'filename is required.' });
    }
    // multer delete file
    // delete file from database
    // delete file from dir
    

    //--------------------------------
    //sql update attribute unlink , is_delete  
    // move file to catch
    
        return res.status(200).json({ message: 'deleteFile Test' });
});



module.exports = router;
