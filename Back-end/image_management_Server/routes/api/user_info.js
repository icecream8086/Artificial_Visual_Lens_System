// @ts-nocheck
const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const fs = require('fs');
const multer = require('multer');

router.get('/test', async (req, res) => {

    return res.status(200).json({ message: 'test' });
});


// 配置multer
const storage_Avatar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './File_Stream/Avatar'); // 设置文件保存的路径
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // 设置文件保存时的文件名
        //convert file to png

    }
});
const upload = multer({ storage: storage_Avatar });

router.post('/modify_Avatar', upload.single('images'), function (req, res) {
    const { token } = req.headers;
    const { UID } = req.body;
    console.log(req);
    //check out UID from redis
    redis.get(token).then((reply) => {
        if (reply != UID) {
            console.log('token ' + token);
            console.log('reply ' + reply);
            console.log('UID ' + UID);
            return res.status(401).json({ message: 'token is not match UID please login again' });
        } else {
            // rename file
            const newFileName = './File_Stream/Avatar/' + UID + '.png';
            fs.rename(req.file.path, newFileName, function (err) {
                if (err) {
                    return res.status(503).json({ message: 'rename error' });
                } else {
                    return res.status(200).json({ message: 'modify_Avatar successfuly' });
                }
            });
        }
    }).catch(() => {
        return res.status(503).json({ message: 'redis error' });
    });

});

router.get('/get_Avatar/:id', async (req, res) => {

    const { id } = req.params;
    try {
        res.sendFile(id + '.png', { root: './File_Stream/Avatar' });
    } catch (err) {
        return res.status(404).json({ message: 'get_Avatar error' });
    }
});

router.get('/get_basic_info/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const secret = 'SELECT username , full_name, email FROM users WHERE UID = ?;'
        const result = await query(secret,
            [id]
        );
        const results = JSON.parse(JSON.stringify(result));
        return res.status(200).json({ results });
    } catch (err) {
        console.error('Error during get_user_basicinfo:', err);
        next(err);
    }
});

router.get('/get_user_info/:id', async (req, res, next) => {
    const { token } = req.headers;
    const { id } = req.params;
    const { UID } = req.body;
    try {
        redis.get(token).then((reply) => {
            if (reply != UID) {
                return res.status(401).json({ message: 'token is not match UID please login again' });
            }
        }).catch(() => {
            return res.status(503).json({ message: 'redis error' });
        });
        
        const secret = 'SELECT age, address FROM user_info WHERE UID = ?;'
        const result = await query(secret,[id]);

        const results = JSON.parse(JSON.stringify(result));
        return res.status(200).json({ results });
    } catch (err) {
        console.error('Error during get_user_info:', err);
        next(err);
    }
});

router.post('/modify_user_info', async (req, res, next) => {
    const { token } = req.headers;
    const { UID, age, gender ,address ,phone_number,nickname } = req.body;
    try {
        redis.get(token).then((reply) => {
            if (reply != UID) {
                return res.status(401).json({ message: 'token is not match UID please login again' });
            }
        }).catch(() => {
            return res.status(503).json({ message: 'redis error' });
        });
        //UPDATE user_info SET age = your_age, gender = your_gender, address = your_address, phone_number = your_phone_number, nickname = your_nickname WHERE UID = your_uid;
        let sql = `UPDATE user_info SET`;
        if (age) {
            sql += ` age = '${age}',`;
        }
        if (gender) {
            sql += ` gender = '${gender}',`;
        }
        if (address) {
            sql += ` address = '${address}',`;
        }
        if (phone_number) {
            sql += ` phone_number = '${phone_number}',`;
        }
        if (nickname) {
            sql += ` nickname = '${nickname}',`;
        }
        sql = sql.slice(0, -1); // 移除最后一个逗号
        sql += ` WHERE UID = '${UID}';`;

        return res.status(200).json({ message: 'modify_user_info successfuly' });
    } catch (err) {
        console.error('Error during modify_user_info:', err);
        next(err);
    }
});

router.get('/get_account_statu/:id', async (req, res, next) => {
    const { token } = req.headers;
    const { id } = req.params;
    const { UID } = req.body;
    try {
        redis.get(token).then((reply) => {
            if (reply != UID) {
                return res.status(401).json({ message: 'token is not match UID please login again' });
            }
        }).catch(() => {
            return res.status(503).json({ message: 'redis error' });
        });
        //SELECT * FROM auth_info WHERE UID = <特定值>;

        let sql = `SeLECT * FROM auth_info WHERE UID = ?;`;
        const result = await query(sql,[id]);
        const results = JSON.parse(JSON.stringify(result));
        return res.status(200).json({ results });
    } catch (err) {
        console.error('Error during get_account_statu:', err);
        next(err);
    }
});

router.post('/modify_account_statu/:id', async (req, res, next) => {
    const { id } = req.params;
    const { token } = req.headers;
    /* useage = "登录信息表" */
    // CREATE TABLE auth_info (
    //     UID INT PRIMARY KEY,
    //     password VARCHAR(255) DEFAULT NULL,
    //     force_change_password BOOLEAN DEFAULT TRUE,
    //     allow_password_auth BOOLEAN DEFAULT TRUE,
    //     FOREIGN KEY (UID) REFERENCES users (UID)
    // );
    const { UID,force_change_password ,allow_password_auth } = req.body;
    try {
        redis.get(token).then((reply) => {
            if (reply != UID) {
                return res.status(401).json({ message: 'token is not match UID please login again' });
            }
        }).catch(() => {
            return res.status(503).json({ message: 'redis error' });
        });
        //UPDATE auth_info SET force_change_password = your_force_change_password, allow_password_auth = your_allow_password_auth WHERE UID = your_uid;
        let sql = `UPDATE auth_info SET`;
        if (force_change_password) {
            sql += ` force_change_password = '${force_change_password}',`;
        }
        if (allow_password_auth) {
            sql += ` allow_password_auth = '${allow_password_auth}',`;
        }
        sql = sql.slice(0, -1); // 移除最后一个逗号
        sql += ` WHERE UID = '${UID}';`;

        return res.status(200).json({ message: 'modify_account_statu successfuly' });
    } catch (err) {
        console.error('Error during modify_account_statu:', err);
        next(err);
    }
});

router.get('/banned_users/:id', async (req, res, next) => {
    const { id } = req.params;
    
    try {
        sql = `SELECT is_banned FROM banned_users WHERE UID = ?;`;
        const result = await query(sql,[id]);
        result.results.is_banned = result.results.is_banned == 1 ? true : false;
        return res.status(200).json({ result });
    } catch (err) {
        console.error('Error during banned_users:', err);
        next(err);
    }
});

router.post('/banned_users/:id', async (req, res, next) => {
    const { token } = req.headers;
    const { id } = req.params;
    const { is_banned,UID } = req.body;
    // id 为被封禁的用户的UID
    // UID 为封禁者的UID

    try {
        redis.get(token).then((reply) => {
            if (reply != UID) {
                return res.status(401).json({ message: 'token is not match UID please login again' });
            }
        }).catch(() => {
            return res.status(503).json({ message: 'redis error' });
        });
        //UPDATE banned_users SET is_banned = your_is_banned WHERE UID = your_uid;
        let sql = `UPDATE banned_users SET`;
        if (is_banned) {
            sql += ` is_banned = '${is_banned}',`;
        }
        sql = sql.slice(0, -1); // 移除最后一个逗号
        sql += ` WHERE UID = '${UID}';`;

        return res.status(200).json({ message: 'banned_users successfuly' });
    } catch (err) {
        console.error('Error during banned_users:', err);
        next(err);
    }
});



module.exports = router;