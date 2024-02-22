// @ts-nocheck
const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const {validateToken} = require('../../lib/logic_module/check_user');
const {validateInput_booleam} = require('../../lib/logic_module/checkBoolean');
const {validate_authority_admin,validate_authority_root,validate_authority_modify,validate_authority_write,validate_authority_Read} = require('../../lib/logic_module/check_authority'); // authority check
const { error_control } = require('../../lib/life_cycle/error_control');

const fs = require('fs');
const multer = require('multer');

/**
 * Route to test the API
 * @name GET/api/user_info/test
 * @function
 * @memberof module:routers/user_info
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - Returns a JSON object with a message property
 */
router.get('/test', async (req, res) => {

    return res.status(200).json({ message: 'test' });
});


// 配置multer
/**
 * Multer disk storage configuration for avatar images.
 * @type {Object}
 */
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

/**
 * Route to modify user avatar
 * @name POST/api/user_info/modify_Avatar
 * @function
 * @memberof module:routers/user_info
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - Returns a JSON object with a message property
 */
router.post('/modify_Avatar', upload.single('images'), function (req, res) {
    const { token } = req.headers;
    const { UID } = req.body;

    if (token === undefined) {
        return res.status(401).json({ message: 'Token is required.' });
    }

    validateToken(token, UID)
        .then(() => {
            // Rename file
            const newFileName = './File_Stream/Avatar/' + UID + '.png';
            fs.rename(req.file.path, newFileName, function (err) {
                if (err) {
                    return res.status(503).json({ message: 'Rename error.' });
                } else {
                    return res.status(200).json({ message: 'Modify avatar successfully.' });
                }
            });
        })
        .catch((error) => {
            return res.status(401).json({ message: error.message });
        });
});

/**
 * Route to get user avatar
 * @name GET/api/user_info/get_Avatar/:id
 * @function
 * @memberof module:routers/user_info
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - Returns the user's avatar image file
 */
router.get('/get_Avatar/:id', async (req, res) => {

    const { id } = req.params;
    try {
        res.sendFile(id + '.png', { root: './File_Stream/Avatar' });
    } catch (err) {
        error_control(err, res, req);
    }
});


router.get('/get_basic_info/:id', async (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.token;
    const UID = req.headers.uid;

    if (token == undefined) {
        return res.status(401).json({ message: 'Token is required.' });
    }
    if (UID == undefined) {
        return res.status(401).json({ message: 'UID is required.' });
    }
    if (id == undefined) {
        return res.status(401).json({ message: 'id is required.' });
    }

    try {
        await validateToken(token, UID);
        const sql = 'SELECT username, full_name, email FROM users WHERE UID = ?;';
        const result = await query({
            sql,
            values: [id],
        });
        const results = JSON.parse(JSON.stringify(result));

        if (results.length === 0) {
            return res.status(401).json({ message: 'id does not exist.' });
        }
        return res.status(200).json({ results });
    } catch (error) {
        return res.status(401).json({ message: error.message });
        console.error('Error during get_user_basicinfo:', error);
    }
});


router.get('/get_user_info/:id', async (req, res, next) => {
    const { id } = req.params;
    const token = req.headers.token;
    const UID = req.headers.uid;

    if (token == undefined) {
        return res.status(401).json({ message: 'Token is required.' });
    }
    if (UID == undefined) {
        return res.status(401).json({ message: 'UID is required.' });
    }
    if (id == undefined) {
        return res.status(401).json({ message: 'id is required.' });
    }

    try {
        await validateToken(token, UID);
        const sql = 'SELECT age, gender, address, phone_number, nickname user_info WHERE UID = ?;';
        const result = await query({
            sql,
            values: [id],
        });
        const results = JSON.parse(JSON.stringify(result));

        if (results.length === 0) {
            return res.status(401).json({ message: 'id does not exist.' });
        }
        return res.status(200).json({ results });
    } catch (error) {
        console.error('Error during get_user_basicinfo:', error);
        return res.status(401).json({ message: error.message });
    }
});

/**
 * Route to modify user information
 * @name POST/api/user_info/modify_user_info
 * @function
 * @memberof module:routers/user_info
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Object} - Returns a JSON object with a message property
 */
router.post('/modify_user_info', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;


    const { age, gender, address, phone_number, nickname } = req.body;

    if (token == undefined) {
        return res.status(401).json({ message: 'Token is required.' });
    }
    if (UID == undefined) {
        return res.status(401).json({ message: 'UID is required.' });
    }
    try {

        await validateToken(token, UID);
        let sql = `UPDATE user_info SET`;
        if (age != undefined && age != null) {
            sql += ` age = ${age},`;
        }

        if (gender != undefined && gender != null) {
            sql += ` gender = '${gender}',`;
        }
        if (address != undefined && address != null) {
            sql += ` address = '${address}',`;
        }
        if (phone_number != undefined && phone_number != null) {
            sql += ` phone_number = '${phone_number}',`;
        }
        if (nickname != undefined && nickname != null) {
            sql += ` nickname = '${nickname}',`;
        }
        if (age != undefined || gender != undefined || address != undefined || phone_number != undefined || nickname != undefined) {
            sql = sql.slice(0, -1); // 移除最后一个逗号
        }
        sql += ` WHERE UID = '${UID}';`;
        await query(sql);
        return res.status(200).json(
            {
                message: 'modify_user_info successfully',
                age: age != null ? age : '',
                gender: gender != null ? gender : '',
                address: address != null ? address : '',
                phone_number: phone_number != null ? phone_number : '',
                nickname: nickname != null ? nickname : ''
            });

    } catch (err) {
        error_control(err, res, req);
    }
});

/**
 * Route to get user account status
 * @name GET/api/user_info/get_account_statu/:id
 * @function
 * @memberof module:routers/user_info
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Object} - Returns a JSON object with the user's account status
 */
router.get('/get_account_statu', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    const { id } = req.body;

    if (token == undefined || UID == undefined) {
        return res.status(401).json({ message: 'Token or uid is null' });
    }
    if (id == undefined) {
        return res.status(401).json({ message: 'id is required.' });
    }
    try {

        await validateToken(token, UID);
        let sql = `SeLECT * FROM auth_info WHERE UID = ?;`;
        //SELECT * FROM auth_info WHERE UID = <特定值>;

        const result = await query(sql, [id]);
        const results = JSON.parse(JSON.stringify(result));
        return res.status(200).json({ results });




    } catch (err) {
        error_control(err, res, req);
    }
});

router.post('/modify_account_statu', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let { force_change_password, allow_password_auth,user_id } = req.body;


    if (token == undefined || UID == undefined || user_id == undefined) {
        return res.status(401).json({ message: 'incorrect parameter Exception' });
    }

    try {
        await validateInput_booleam(force_change_password,allow_password_auth);
        await validateToken(token, UID);
        //UPDATE auth_info SET force_change_password = your_force_change_password, allow_password_auth = your_allow_password_auth WHERE UID = your_uid;
        let sql = `UPDATE auth_info SET`;
        if (force_change_password) {
            sql += ` force_change_password = '${force_change_password}',`;
        }
        if (allow_password_auth) {
            sql += ` allow_password_auth = '${allow_password_auth}',`;
        }
        sql = sql.slice(0, -1); // 移除最后一个逗号
        sql += ` WHERE UID = '${user_id}';`;
        await query(sql);

        return res.status(200).json({ message: 'modify_account_statu successfuly' });
    } catch (err) {
        error_control(err, res, req);
    }
});

router.get('/user_is_banned', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    
    let { id } = req.body;

    try {
        await validateToken(token, UID);
        sql = `SELECT is_banned FROM banned_users WHERE UID = ?;`;
        const result = await query(sql, [id]);
        // result.results.is_banned = result.results.is_banned == 1 ? true : false;
        return res.status(200).json({ result });
    } catch (err) {
        error_control(err, res, req);

    }
});

router.post('/Modify_banned_users', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    
    const { banned_users } = req.body;
    const { is_banned } = req.body;
    if (token == undefined) {
        return res.status(401).json({ message: 'Token is required.' });
    }
    try {
        await validateToken(token, UID);
        await checkBoolean(is_banned);
        //UPDATE banned_users SET is_banned = your_is_banned WHERE UID = your_uid;
        let sql = `UPDATE banned_users SET`;
        if (is_banned!=undefined) {
            sql += ` is_banned = '${is_banned}',`;
        }
        sql = sql.slice(0, -1); // 移除最后一个逗号
        sql += ` WHERE UID = '${banned_users}';`;
        await query(sql);
        return res.status(200).json({ message: 'Modify Banned statu successfuly' });
    } catch (err) {
        error_control(err, res, req);

    }
});


router.get('/get_save_auth', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let User_ID = req.body.User_ID;
    try {
        await validateToken(token, UID);
        await validate_authority_admin(UID);
        sql = `SELECT save_auth FROM safe_auth WHERE UID = ?;`;
        /**
         * Queries the database for user information using the provided User_ID.
         * @param {number} User_ID - The ID of the user to retrieve information for.
         * @returns {Promise<any>} - A Promise that resolves with the result of the query.
         */
        const result = await query(sql, [User_ID]);
        return res.status(200).json({ result });
    } catch (err) {
        error_control(err, res, req);

    }
});

router.post('/modify_save_auth', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let User_ID = req.body.User_ID;
    let save_auth = req.body.save_auth;
    try {
        await validateToken(token, UID);
        await checkBoolean(save_auth);
        await validate_authority_root(UID);
        sql = `UPDATE safe_auth SET save_auth = ? WHERE UID = ?;`;
        /**
         * Executes a SQL query with the provided parameters to update the authentication status of a user.
         * @param {string} sql - The SQL query to execute.
         * @param {Array} params - The parameters to pass to the SQL query.
         * @returns {Promise} - A Promise that resolves with the result of the SQL query.
         */
        const result = await query(sql, [save_auth, User_ID]);
        return res.status(200).json({ result });
    } catch (err) {
        error_control(err, res, req);

    }
});

router.post('/delete_account', async (req, res, next) => {

    let UID = req.headers.uid;
    let token = req.headers.token;
    let User_ID = req.body.User_ID;
    try {
        await validateToken(token, UID);
        await validate_authority_root(UID);
        sql = `DELETE FROM users WHERE UID = ?;`;
        /**
         * Executes a SQL query with the provided parameters to delete a user.
         * @param {string} sql - The SQL query to execute.
         * @param {Array} params - The parameters to pass to the SQL query.
         * @returns {Promise} - A Promise that resolves with the result of the SQL query.
         */
        const result = await query(sql, [User_ID]);
        return res.status(200).json({ result });
    } catch (err) {
        error_control(err, res, req);

    }
});
module.exports = router;