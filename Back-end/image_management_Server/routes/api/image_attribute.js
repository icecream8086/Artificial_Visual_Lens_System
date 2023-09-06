const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const query = require('../../lib/datasource/mysql_connection_promise');  // Database connection
const redis=require('../../lib/datasource/redis_connection_promise'); // Redis connection

router.post('/get_attribute', async (req, res, next) => {});
router.post('/get_info', async (req, res, next) => {});
router.post('/get_style', async (req, res, next) => {});

module.exports = router;
