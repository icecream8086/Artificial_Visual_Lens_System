var mysql = require('mysql');

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
  console.log('Connected to database as threadId ' + connection.threadId);
});

// 导出数据库连接
module.exports = connection;
