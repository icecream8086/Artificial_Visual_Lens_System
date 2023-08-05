// @ts-nocheck

const cpu_statu_info = require('../.././lib/sysinfo/cpu_info');
const diskInfo = require('../.././lib/sysinfo/disk_info');
const monitorOsInfo = require('../.././lib/sysinfo/sys_info');
const express = require('express');
const router = express.Router();

/**
 * @description Route to get CPU status information
 * @route GET /api/host/cpu_statu_info
 * @returns {Object} Returns an object containing CPU status information
 * @throws {Error} Throws an error if there is an issue retrieving the CPU status information
 */
router.get('/cpu_statu_info', function (req, res, next) {
    cpu_statu_info().then(data => {
        res.json(data);
    }).catch(error => {
        console.error(error);
        next(error);
    });
});

/**
 * @description Route to get disk information
 * @route GET /api/host/diskInfo
 * @returns {Object} Returns an object containing disk information
 * @throws {Error} Throws an error if there is an issue retrieving the disk information
 */
router.get('/diskInfo', function (req, res, next) {
    diskInfo().then(data => {
        res.json(data);
    }).catch(error => {
        console.error(error);
        next(error);    
    });
});

/**
 * @description Route to get system information
 * @route GET /api/host/monitorOsInfo
 * @returns {Object} Returns an object containing system information
 * @throws {Error} Throws an error if there is an issue retrieving the system information
 */
router.get('/monitorOsInfo', function (req, res, next) {
    monitorOsInfo().then(data => {
        res.json(data);
    }).catch(error => {
        console.error(error);
        next(error);
    });
});

module.exports = router;