// @ts-nocheck
var mysql = require('mysql');
const axios = require('axios');
const { apiTarget } = require('../config');
// 创建数据库连接
var connection = mysql.createConnection({
  host: '192.168.101.1',      // 数据库主机名
  user: 'root',   // 数据库用户名
  password: 'MYSQL_ROOT_PASSWORD',   // 数据库密码
  database: 'image_management_server'    // 数据库名称
});

// 连接到数据库
connection.connect(function(err) {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
   axios.get(apiTarget + '/ping').then(response => {
    console.log(response.data.status);
  }).catch(error => {
    console.log(error.message);
    console.warn('Visual Lens API is not available');
  });
  console.log('Mysql Connected to database as threadId ' + connection.threadId);
});

// 导出数据库连接
module.exports = connection;
