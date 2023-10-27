//通知功能
const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
const { MessageQueue} = require('../../lib/logic_module/message_service');
import { validateInput_is_null_or_empty } from '../../lib/logic_module/checkBoolean';
const validateToken = require('../../lib/logic_module/check_user');

const messageQueue = new MessageQueue();
//table my_frequency
router.post('/publish', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    /**
     * Handles the request to switch to a new queue.
     * @param {Object} req - The request object.
     * @param {string} req.body.queueName - The name of the new queue.
     */
    let queueName = req.body.queueName;
    let group_id = req.body.group_id;
    let message = req.body.message;
    try{
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID, token);
        await messageQueue.publish(queueName, message, UID?.toString(), group_id);
        res.json({status: 'publish success'});
    }catch(err){
        return res.json({status: 'error', message: err.message});
    }
});



router.get('/consume', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    /**
     * Handles the request to switch to a new queue.
     * @param {Object} req - The request object.
     * @param {string} req.body.queueName - The name of the new queue.
     */
    let queueName = req.body.queueName;
    let group_id = req.query.group_id;
    try{
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID, token);
        messageQueue.consume(queueName, UID?.toString(), group_id?.toString(), (message) => {
            res.json({status: 'success', message: message});
        });
    }catch(err){
        return res.json({status: 'error', message: err.message});
        next(err);
    }
});

router.post('/set_timeout', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    /**
     * Handles the request to switch to a new queue.
     * @param {Object} req - The request object.
     * @param {string} req.body.queueName - The name of the new queue.
     */
    let queueName = req.body.queueName;
    let timeout = req.body.timeout;
    try{
        await validateInput_is_null_or_empty(UID, token);
        await validateToken(UID, token);
        timeout=Number(timeout);
        setTimeout(() => {
            messageQueue.clear(queueName);
        }, timeout);
        res.json({status: 'success'});
    }catch(err){
        return res.json({status: 'error', message: err.message});
        next(err);
    }
});


module.exports = router;