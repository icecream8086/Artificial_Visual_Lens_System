const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
import { validateInput_is_null_or_empty } from '../../lib/logic_module/checkBoolean';
const validateToken = require('../../lib/logic_module/check_user');
import {
    validate_authority_admin,
    validate_authority_root,
    validate_authority_modify,
    validate_authority_write,
    validate_authority_Read,
    validate_authority_IO,
} from '../../lib/logic_module/check_authority';

router.get('/get_group_info', async (req, res, next) => {
    // list group menber
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let sql = 'select * from user_group where group_id = ?';
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        const result = await query(sql, group_id);
        return res.status(200).json({ message: result });
    } catch (error) {
        return res.status(401).json({ message: error.message });
        console.log(error.message);
        next(error);
    }
});

router.post('/modifiy_basic_group_info', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    const { group_id, group_name, READ_A, WRITE_A, EXECUTE_A, Full_Control_A, BASIC_CONTROL_A } = req.body;

    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        await validate_authority_modify(UID);
        if (group_id <= 127) {
            return res.status(401).json({ message: "group id not allowed" });
        }
        let sql = 'updat user_group SET';
        if (group_name != undefined && group_name != null) {
            sql += ` group_name = ${group_name},`;
        }
        if (READ_A != undefined && READ_A != null) {
            sql += ` READ_A = ${READ_A},`;
        }
        if (WRITE_A != undefined && WRITE_A != null) {
            sql += ` WRITE_A = ${WRITE_A},`;
        }
        if (EXECUTE_A != undefined && EXECUTE_A != null) {
            sql += ` EXECUTE_A = ${EXECUTE_A},`;
        }
        sql = sql.substring(0, sql.length - 1);
        sql += ` where group_id = ${group_id}`;
        const result = await query(sql);
        return res.status(200).json({ message: result });

    } catch (error) {
        return res.status(401).json({ message: error.message });
        console.log(error.message);
        next(error);
    }
});
// /* useage = "用户组" */
// CREATE TABLE IF NOT EXISTS user_group (
//     group_id INT PRIMARY KEY,
//     group_name VARCHAR(255),
//     READ_A BOOLEAN DEFAULT TRUE,
//     WRITE_A BOOLEAN DEFAULT TRUE,
//     EXECUTE_A BOOLEAN DEFAULT TRUE,
//     Full_Control_A BOOLEAN DEFAULT FALSE,
//     BASIC_CONTROL_A BOOLEAN DEFAULT FALSE
//   );
router.get('/list', async (req, res, next) => {
    // list group menber
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let sql = 'SELECT group_id FROM user_access_info WHERE group_id = ?;';

    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID);

        await query(sql, group_id);
    } catch (error) {
        return res.status(401).json({ message: error.message });
        console.log(error.message);
        next(error);
    }
});

/**
 * Retrieves the group ID of a user from the user_access_info table in the database.
 *
 * @param {number} UID - The ID of the user.
 * @returns {string} The group ID of the user.
 */
router.get('/get_ownership', async (req, res, next) => {
    // list ownership of group
    // only slef can get
    let UID = req.headers.uid;
    let token = req.headers.token;

    let sql = 'SELECT group_id FROM user_access_info WHERE UID = ?;';

    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID);
        let result = await query(sql, UID);

        return res.status(200).json({ message: result });

    } catch (error) {
        return res.status(401).json({ message: error.message });
        console.log(error.message);
        next(error);
    }
});

router.get('/get_group', async (req, res, next) => {
    // list group
    let UID = req.headers.uid;
    let token = req.headers.token;
    let sql = 'SELECT * FROM user_group ;';
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        let result = await query(sql);
        return res.status(200).json({ message: result });
    } catch (error) {
        return res.status(401).json({ message: error.message });
        console.log(error.message);
        next(error);
    }
});

router.post('/add', async (req, res, next) => {
    // add user to group
    try {
        // let sql = 'insert into user_group set ?';
        // let result = await query(sql, req.body);
        // res.json(result);
    } catch (error) {
        next(error);
    }
});


router.post('/add_group', async (req, res, next) => {
    // add new group
    try {
        // let sql = 'insert into user_group set ?';
        // let result = await query(sql, req.body);
        // res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post('/modifiy_menber', async (req, res, next) => {
    // modifiy user to group
    try {
        // let sql = 'update user_group set ? where id = ?';
        // let result = await query(sql, [req.body, req.body.id]);
        // res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post('/delete', async (req, res, next) => {
    // delete user to group
    try {
        // let sql = 'delete from user_group where id = ?';
    } catch (error) {
        next(error);
    }
});

router.post('/delete_group', async (req, res, next) => {
    // delete group
    try {
        // let sql = 'delete from user_group where id = ?';
    } catch (error) {
        next(error);
    }
});


module.exports = router;