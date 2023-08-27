/**
 * Express router for user authentication.
 * @module authRouter
 */

const express = require('express');
const router = express.Router();

const query = require('../../lib/datasource/mysql_connection_promise');  // Database connection
const redis = require('../../lib/datasource/redis_connection_promise'); // Redis connection

router.post('/uploadFile', async (req, res, next) => {

    //
    return res.status(200).json({ message: 'uploadFile Test' });
});

router.post('/downloadFile', async (req, res, next) => {

    //
    return res.status(200).json({ message: 'downloadFile Test' });
});

router.post('/deleteFile', async (req, res, next) => {
    
        //
        return res.status(200).json({ message: 'deleteFile Test' });
});



module.exports = router;
