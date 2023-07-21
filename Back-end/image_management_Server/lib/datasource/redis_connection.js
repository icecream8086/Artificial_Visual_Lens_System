// @ts-nocheck
const Redis = require('ioredis');

const redis = new Redis({
    host: '192.168.101.1',
    port: 6379,
});
exports.redis = redis;
