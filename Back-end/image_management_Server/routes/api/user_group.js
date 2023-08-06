const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const fs = require('fs');
const multer = require('multer');
// todo ... 
module.exports = router;