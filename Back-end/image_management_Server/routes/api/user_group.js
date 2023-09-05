const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const fs = require('fs');
const multer = require('multer');
// todo ... 

router.get('/list', async (req, res, next) => {
    try {
        // let sql = 'select * from user_group';
        // let result = await query(sql);
        // res.json(result);
    } catch (error) {
        next(error);
    }
});


router.post('/add', async (req, res, next) => {
    try {
        // let sql = 'insert into user_group set ?';
        // let result = await query(sql, req.body);
        // res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post('/modifiy', async (req, res, next) => {
    try {
        // let sql = 'update user_group set ? where id = ?';
        // let result = await query(sql, [req.body, req.body.id]);
        // res.json(result);
    } catch (error) {
        next(error);
    }
});
    
module.exports = router;