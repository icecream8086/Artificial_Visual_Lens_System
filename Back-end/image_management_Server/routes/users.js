// @ts-nocheck
var express = require('express');
var router = express.Router();
var db = require('../lib/datasource/mysql_connection');  // 引用数据库连接
const fs = require('fs');
const multer = require('multer');
/* this is a demo page */

// GET /users
router.get('/', function(req, res, next) {
  res.send('API endpoint: GET /users');
});

// POST /users
router.post('/', function(req, res, next) {
  res.send('API endpoint: POST /users');
});

/***
 * 
 *  ! warning
 *  the next router will extend the previous router
 * so the url will be /users/select_test
 */
router.get('/select_test', function(req, res, next) {
  // 执行数据库查询
  db.query('SELECT * FROM test', function(err, results, fields) {
    if (err) throw err;
    console.log(results);
    res.json(results);
    console.log('The solution is: ', results.length, results[0].id);

  });
});

router.get('/image_test_small', function(req, res, next) {
  // path: /public/images/small
  res.sendFile('Small.jpg', { root: './File_Stream/Test' });
});


router.get('/image_test_Large', function(req, res, next) {
  // path: /public/images/small
  res.sendFile('Large.jpg', { root: './File_Stream/Test' });
});



router.get('/image_tests', function(req, res, next) {
  //return sha256('file') 
  res.sendFile('mfpiH90vynVo1qAi.png', { root: './File_Stream/Test/catch' });
  local = req.headers.host;
  return res.json({ message: 'image_test' , Image_URL: 'http://'+local+'/users/image_test' });
});
router.get('/image_test', function(req, res, next) {
  //return sha256('file') 
  res.sendFile('eager-for-power.jpg', { root: './File_Stream/Test/catch' });
});





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

router.post('/upload_image_Test', upload.single('files'), function(req, res, next) {
  // 文件上传成功后的处理逻辑
  console.log('File uploaded successfully.');
  res.status(200).send('File uploaded successfully.');
});

router.post('/test_py', (req, res) => {
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/data',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const req2 = http.request(options, (res2) => {
    console.log(`statusCode: ${res2.statusCode}`);

    res2.on('data', (data) => {
      console.log(data.toString());
      res.send(data.toString());
    });
  });

  req2.on('error', (error) => {
    console.error(error);
    res.status(500).send('Internal server error');
  });

  const data = JSON.stringify(req.body);

  req2.write(data);
  req2.end();
});

module.exports = router;
