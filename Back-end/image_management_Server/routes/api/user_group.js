const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
import { get_group_id,get_group_info } from '../../lib/file_system/users';
import { validateInput_is_null_or_empty } from '../../lib/logic_module/checkBoolean';
const {validateToken} = require('../../lib/logic_module/check_user');
import {
    validate_authority_admin,
    validate_authority_root,
    validate_authority_modify,
    validate_authority_write,
    validate_authority_Read,
    validate_authority_IO,
} from '../../lib/logic_module/check_authority';

router.get('/get_group_id', async (req, res, next) => {
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
        await validate_authority_admin(UID);
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
        await validate_authority_admin(UID);
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
    /**
     * Retrieves the group ID associated with a given user ID from the user_access_info table.
     *
     * @param {number} UID - The user ID to retrieve the group ID for.
     * @returns {string} The group ID associated with the given user ID.
     */
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
    /**
     * Retrieves the group name and group ID from the user_group table in the database.
     *
     * @type {string}
     */
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID);
        let gid= await get_group_id(UID);
        
        let result = await get_group_info(gid);
        return res.status(200).json({ message: result });
    } catch (error) {
        return res.status(401).json({ message: error.message });
        console.log(error.message);
        next(error);
    }
});


router.post('/add_group', async (req, res, next) => {
    // add new group
    let UID = req.headers.uid;
    let token = req.headers.token;
    let GroupID = req.body.group_id;
    let GroupName = req.body.group_name;
    let sql = '';
    try {
        validateInput_is_null_or_empty(UID, token);
        validateToken(token, UID);
        validate_authority_admin(UID);
        if (GroupID <= 127) {
            return res.status(401).json({ message: "group id not allowed" });
        }
        sql = 'insert into user_group (group_id,group_name) values (?,?);';
        let result = await query(sql, [GroupID, GroupName]);
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
    }
});


router.post('/modifiy_menber', async (req, res, next) => {
    // modifiy user to group
    let UID = req.headers.uid;
    let token = req.headers.token;
    let user_id = req.body.user_id;
    let group_id = req.body.group_id;
    // 前127位为保护地址，只有管理员才能修改
    // 后面的地址可以由管理员和组长修改
    // 被可以避免组长把管理员踢出组导致系统权限被锁
    // let sql = `
    //     update user_access_info
    //     set group_id = ?
    //     where UID = ?;
    // `;
    let sql = `
        update user_access_info
        set group_id = ?
        where UID = ?;
    `;
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        await validate_authority_admin(UID);

        if(group_id <= 127){
            return res.status(401).json({ message: "group id not allowed ,group id must >= 127 " });
        }
        let result = await query(sql,[group_id,user_id]);        
        return res.status(200).json({ message: result });

    } catch (error) {
        next(error);
    }
});


router.post('/add_menber', async (req, res, next) => {

    // add user to group
    let UID = req.headers.uid;
    let token = req.headers.token;
    let user_id = req.body.user_id;
    let group_id = req.body.group_id;
    let sql = `
        insert into user_access_info (UID,group_id) values (?,?);
    `;
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        await validate_authority_admin(UID);
        if(group_id <= 127){
            return res.status(401).json({ message: "group id not allowed ,group id must >= 127 " });
        }
        let result = await query(sql,[user_id,group_id]);        
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
    }
}
);


router.post('/delete_menber', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let user_id = req.body.user_id;
    let group_id = req.body.group_id;
    let sql = `
        delete from user_access_info where UID = ? and group_id = ?;
    `;
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        await validate_authority_admin(UID);
        if(group_id <= 127){
            return res.status(401).json({ message: "group id not allowed ,group id must >= 127 " });
        }
        let result = await query(sql,[user_id,group_id]);        
        return res.status(200).json({ message: result });
    }
    catch (error) {
        return res.status(401).json({ message: error.message });
        console.log(error.message);
        next(error);
    }
});

router.post('/add_menber_sys', async (req, res, next) => {

    // add user to group
    let UID = req.headers.uid;
    let token = req.headers.token;
    let user_id = req.body.user_id;
    let group_id = req.body.group_id;
    let sql = `
        insert into user_access_info (UID,group_id) values (?,?);
    `;
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        await validate_authority_root(UID);
        let result = await query(sql,[user_id,group_id]);        
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
    }
});

router.post('/modifiy_group', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let group_name = req.body.group_name;
    let READ_A = req.body.READ_A;
    let WRITE_A = req.body.WRITE_A;
    let EXECUTE_A = req.body.EXECUTE_A;
    let sql = `
        UPDATE user_group
        SET
            group_name = ?,
            READ_A = ?,
            WRITE_A = ?,
            EXECUTE_A = ?
        WHERE
            group_id = ?;
    

    `;
    try {
        if (group_id <= 127) {
            return res.status(401).json({ message: "group id not allowed" });
        }

        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        await validate_authority_admin(UID);

        let result = await query(sql, [group_name, READ_A, WRITE_A, EXECUTE_A, group_id]);
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
    }
});

router.post('/modifiy_group_sys', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let group_name = req.body.group_name;
    let READ_A = req.body.READ_A;
    let WRITE_A = req.body.WRITE_A;
    let EXECUTE_A = req.body.EXECUTE_A;
    let BASIC_CONTROL_A = req.body.BASIC_CONTROL_A;
    let Full_Control_A = req.body.Full_Control_A;

    let sql = `
        UPDATE user_group
        SET
            group_name = ?,
            READ_A = ?,
            WRITE_A = ?,
            EXECUTE_A = ?,
            BASIC_CONTROL_A = ?,
            Full_Control_A = ?
        WHERE
            group_id = ?;
    `;
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(token, UID);
        await validate_authority_root(UID);

        let result = await query(sql, [group_name, READ_A, WRITE_A, EXECUTE_A,BASIC_CONTROL_A,Full_Control_A, group_id]);
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
    }
});




router.post('/delete', async (req, res, next) => {
    // delete user to group
    let UID = req.headers.uid;
    let token = req.headers.token;
    let User_ID = req.body.user_id;
    let Group_ID = req.body.group_id;
    try {
        if (Group_ID <= 127) {
            return res.status(401).json({ message: "group id not allowed" });
        }
        validateInput_is_null_or_empty(UID, token);
        validateToken(token, UID);
        validate_authority_admin(UID);
        let sql = 'delete from user_access_info where UID = ? and group_id = ?';
        let result = await query(sql, [User_ID, Group_ID]);
        return res.status(200).json({ message: result });

    } catch (error) {
        return res.status(401).json({ message: error.message });
        next(error);
    }
});

router.post('/delete_sys', async (req, res, next) => {
    // delete user to group
    let UID = req.headers.uid;
    let token = req.headers.token;
    let User_ID = req.body.user_id;
    let Group_ID = req.body.group_id;
    try {
        validateInput_is_null_or_empty(UID, token);
        validateToken(token, UID);
        validate_authority_root(UID);
        let sql = 'delete from user_access_info where UID = ? and group_id = ?';
        let result = await query(sql, [User_ID, Group_ID]);
        return res.status(200).json({ message: result });

    } catch (error) {
        return res.status(401).json({ message: error.message });
        next(error);
    }
});

router.post('/delete_group', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let sql = `
        delete from user_group where group_id = ?;
    `;
    try {
        if (group_id <= 127) {
            return res.status(401).json({ message: "group id not allowed" });
        }
        validateInput_is_null_or_empty(UID, token);
        validateToken(token, UID);
        validate_authority_admin(UID);
        let result = await query(sql, group_id);
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
    }
});

router.post('/delete_group_sys', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let sql = `
        delete from user_group where group_id = ?;
    `;
    try {
        if (group_id <= 127) {
            return res.status(401).json({ message: "group id not allowed" });
        }
        validateInput_is_null_or_empty(UID, token);
        validateToken(token, UID);
        validate_authority_root(UID);
        let result = await query(sql, group_id);
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
    }
});

router.get('list_menber', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let sql = `
        select UID from user_access_info where group_id = ?;
    `;
    try {
        if (group_id <= 127) {
            return res.status(401).json({ message: "group id not allowed" });
        }
        validateInput_is_null_or_empty(UID, token);
        validateToken(token, UID);
        validate_authority_admin(UID);
        let result = await query(sql, group_id);
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
        return res.status(401).json({ message: error.message });
    }
});
router.get('list_menber_sys', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let sql = `
        select UID from user_access_info where group_id = ?;
    `;
    try {
        validateInput_is_null_or_empty(UID, token);
        validateToken(token, UID);
        validate_authority_root(UID);
        let result = await query(sql, group_id);
        return res.status(200).json({ message: result });
    } catch (error) {
        next(error);
        return res.status(401).json({ message: error.message });
    }
});
module.exports = router;