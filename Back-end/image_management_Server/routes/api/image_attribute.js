// @ts-nocheck
const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const query = require('../../lib/datasource/mysql_connection_promise');  // Database connection
const redis = require('../../lib/datasource/redis_connection_promise'); // Redis connection
const { get_file_name, check_dir_not_exists } = require('../../lib/file_system/file');
const { validateInput_is_null_or_empty } = require('../../lib/logic_module/checkBoolean');
const {validateToken} = require('../../lib/logic_module/check_user');
const { delete_file, get_file_path, get_documents_file, get_source_file, modify_source_file } = require('../../lib/file_system/file');
const { get, result } = require('lodash');

const { validate_authority_root, validate_authority_admin } = require('../../lib/logic_module/check_authority');

router.get('/image_attribute/documents_file', async (req, res, next) => {
    let sha256 = req.body.sha256;
    try {
        let result = await get_documents_file(sha256);
        res.json({ status: 'success', result: result });
    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.post('/image_attribute/modify_documents_file', async (req, res, next) => {
    let sha256 = req.body.sha256;
    let title = req.body.title;
    let subject = req.body.subject;
    let classification = req.body.classification;
    let label = req.body.label;
    let remarks = req.body.remarks;
    try {
        await validateInput_is_null_or_empty(sha256);
        let result = await modify_documents_file(sha256, title, subject, classification, label, remarks);
        res.json({ status: 'success', result: result });

    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.get('/image_attribute/file_info', async (req, res, next) => {
    let sha256 = req.body.sha256;
    try {
        await validateInput_is_null_or_empty(sha256);
        await validateToken(UID, token);
        let result = await get_file_info(sha256);
        res.json({ status: 'success', result: result });
    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.get('/image_attribute/delete_info_file', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let sql_user = 'select sha256 from File_Permission where UID=?';
    let sql_file = 'select * from delete_info_file where sha256=?';

    try {
        await validateToken(UID, token);
        let sha256_list = await query(sql_user, [UID]);
        let result = [];
        for (let i = 0; i < sha256_list.length; i++) {
            let sha256 = sha256_list[i].sha256;
            let temp = await query(sql_file, [sha256]);
            result.push(temp);
        }
        res.json({ status: 'success', result: result });

    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.post('/image_attribute/unlink_file', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;

    let sha256 = req.body.sha256;
    let unlink = req.body.unlink;
    try {
        await validateToken(UID, token);
        await validateInput_is_null_or_empty(sha256, unlink);
        let result = await get_link_info_file(sha256, unlink);
        res.json({ status: 'success', result: result });
    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.get('/image_attribute/clear_unlink_file', async (req, res, next) => {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let sql_user = 'select sha256 from File_Permission where UID=?';
    let sql_file = 'select * from link_info_file where sha256=? and unlink=1';
    try {
        await validateToken(UID, token);
        let sha256_list = await query(sql_user, [UID]);
        let result = [];
        for (let i = 0; i < sha256_list.length; i++) {
            let sha256 = sha256_list[i].sha256;
            let temp = await query(sql_file, [sha256]);
            result.push(temp);
            let results = await get_file_path(sha256);
            let file_path = results[0].Path;
            await delete_file(file_path);
        }
        res.json({ status: 'success', result: result });

    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.get('/image_attribute/source_file', async (req, res, next) => {
    let sha256 = req.body.sha256;
    let UID = req.headers.uid;
    let token = req.headers.token;
    try {
        await validateInput_is_null_or_empty(sha256);
        await validateToken(UID, token);
        let result = await get_source_file(sha256);
        res.json({ status: 'success', result: result });
    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.post('/image_attribute/modify_source_file', async (req, res, next) => {
    // async function modify_source_file(sha_256, author_uid, capture_date, program_name, acquire_date, copy_right) 
    let sha256 = req.body.sha256;
    let author_uid = req.body.author_uid;
    let capture_date = req.body.capture_date;
    let program_name = req.body.program_name;
    let acquire_date = req.body.acquire_date;
    let copy_right = req.body.copy_right;
    try {
        await validateInput_is_null_or_empty(sha256);
        await validateToken(UID, token);
        let result = await modify_source_file(sha256, author_uid, capture_date, program_name, acquire_date, copy_right);
        res.json({ status: 'success', result: result });

    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.get('/image_attribute/file_permission', async (req, res, next) => {
    let sha256 = req.body.sha256;
    let UID = req.headers.uid;
    let token = req.headers.token;
    // async function get_file_permission(sha_256) 
    try {
        await validateInput_is_null_or_empty(sha256);
        await validateToken(UID, token);
        let result = await get_file_permission(sha256);
        res.json({ status: 'success', result: result });

    }
    catch (err) {
               error_control(err, res, req);
    }
});
router.post('/image_attribute/modify_file_permission', async (req, res, next) => {

    let UID = req.headers.uid;
    let token = req.headers.token;
    let sha256 = req.body.sha256;
    let Owner_UID = req.body.uid;
    let GroupID = req.body.GroupID;
    let PermissionID = req.body.PermissionID;
    let Priority = req.body.Priority;
    try {
        await validateInput_is_null_or_empty(sha256);
        await validateToken(UID, token);
        await validateInput_is_null_or_empty(Owner_UID, GroupID, PermissionID, Priority);
        await validate_authority_root(UID, token);
        let result = await modify_file_permission(sha256, Owner_UID, GroupID, PermissionID, Priority);
        res.json({ status: 'success', result: result });

    }
    catch (err) {
               error_control(err, res, req);
    }
});


module.exports = router;
