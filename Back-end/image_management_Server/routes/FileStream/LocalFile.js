/**
 * Express router for user authentication.
 * @module authRouter
 */

const express = require('express');
const router = express.Router();

const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const validateToken = require('../../lib/logic_module/check_user');

const fs = require('fs');
const multer = require('multer');


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
  const  UID  = req.headers;
  const  token  = req.headers;


});

router.post('/downloadFile', async (req, res, next) => {
    
    //
    return res.status(200).json({ message: 'downloadFile Test' });
});

router.post('/downloadFile_share', async (req, res, next) => {
    
  //
  return res.status(200).json({ message: 'downloadFile Test' });
});
router.post('/deleteFile', async (req, res, next) => {
  const { token,UID } = req.headers;

  validateToken(token, UID)
  .then(() => {
    console.log('Token is valid.'); // if token is valid

  })
  .catch((error) => {
    return res.status(401).json({ message: error.message });
  });
});



module.exports = router;
