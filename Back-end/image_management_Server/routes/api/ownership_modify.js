const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const query = require('../../lib/datasource/mysql_connection_promise');  // Database connection
const redis=require('../../lib/datasource/redis_connection_promise'); // Redis connection


router.post('/add_ownership', async (req, res, next) => {
});

router.post('/delete_ownership', async (req, res, next) => {
});

router.post('/modify_ownership', async (req, res, next) => {
});

router.post('/query_ownership', async (req, res, next) => {
});

router.post('/query_ownership_list', async (req, res, next) => {
});

router.post('/query_ownership_list_by_user', async (req, res, next) => {
});

router.post('/query_ownership_list_by_file', async (req, res, next) => {
});


module.exports = router;
