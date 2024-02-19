//通知功能
const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const { MessageQueue } = require('../../lib/logic_module/message_service');
import { error_control } from '../../lib/life_cycle/error_control';
import { validateInput_is_null_or_empty } from '../../lib/logic_module/checkBoolean';
const validateToken = require('../../lib/logic_module/check_user');

const messageQueue = new MessageQueue();
//table my_frequency
router.post('/telegraph/publish', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    /**
     * Handles the request to switch to a new queue.
     * @param {Object} req - The request object.
     * @param {string} req.body.queueName - The name of the new queue.
     */
    // CREATE TABLE `Silenced_user` (
    //     `UID` int NOT NULL,
    //     `shutup` tinyint(1) DEFAULT '0',
    //     PRIMARY KEY (`UID`),
    //     KEY `idx_uid` (`UID`) USING BTREE,
    //     CONSTRAINT `banned_users_ibfk_1_copy_copy` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE
    //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Redis广播功能黑名单';
    let queueName = req.body.queueName;
    let group_id = req.body.group_id;
    let message = req.body.message;
    let sql='select shutup from Silenced_user where UID=?';
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID, token);
        await query(sql, [UID]).then((result) => {
            if (result[0].shutup == 1) {
                throw new Error('you are in the blacklist');
            }
        }
        );
        await messageQueue.publish(queueName, message, UID?.toString(), group_id);
        res.json({ status: 'publish success' });
    } catch (err) {
        error_control(err, res, req);
    }
});
router.get('/telegraph/consume', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    /**
     * Handles the request to switch to a new queue.
     * @param {Object} req - The request object.
     * @param {string} req.body.queueName - The name of the new queue.
     */
    let queueName = req.body.queueName;
    let group_id = req.query.group_id;
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID, token);
        messageQueue.consume(queueName, UID?.toString(), group_id?.toString(), (message) => {
            res.json({ status: 'success', message: message });
        });
    } catch (err) {
        error_control(err, res, req);

    }
});
router.post('/telegraph/set_timeout', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    /**
     * Handles the request to switch to a new queue.
     * @param {Object} req - The request object.
     * @param {string} req.body.queueName - The name of the new queue.
     */
    let queueName = req.body.queueName;
    let timeout = req.body.timeout;
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID, token);
        timeout = Number(timeout);
        setTimeout(() => {
            messageQueue.clear(queueName);
        }, timeout);
        res.json({ status: 'success' });
    } catch (err) {
        error_control(err, res, req);

    }
});

router.get('/telegraph/get_frequency', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    try {
        //修改频道名称实现匹配
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID, token);
        /**
         * Retrieves the frequency from the database for a given UID or Group_ID.
         *
         * @param {number} UID - The unique identifier for the user.
         * @param {number} Group_ID - The unique identifier for the group.
         * @returns {string} The frequency retrieved from the database.
         */
        let sql = 'select frequency from my_frequency where UID=? OR Group_ID=?';
        let result = await query(sql, [UID, group_id]);
        if (result.length == 0) {
            return res.json({ status: 'error', message: 'no frequency found ...' });
        }
        res.json({ status: 'success', frequency: result[0].frequency });
    } catch (err) {
        error_control(err, res, req);

    }
});

router.post('/telegraph/set_frequency', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let group_id = req.body.group_id;
    let frequency = req.body.frequency;
    try {
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID, token);
        /**
         * Inserts a new frequency record into the my_frequency table.
         *
         * @param {number} UID - The user ID associated with the frequency record.
         * @param {number} Group_ID - The group ID associated with the frequency record.
         * @param {number} frequency - The frequency value to be inserted.
         * @returns {void}
         */
        let sql = 'insert into my_frequency (UID, Group_ID, frequency) values (?,?,?)';
        await query(sql, [UID, group_id, frequency]);
        res.json({ status: 'success' });
    } catch (err) {
        error_control(err, res, req);

    }
});

module.exports = router;