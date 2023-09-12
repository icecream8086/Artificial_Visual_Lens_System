// @ts-nocheck
const Redis = require('ioredis');
let host = '192.168.101.1';
let port = 6379;
const redis = new Redis({
    host: host,
    port: port,
});
console.log('redis on ' + host + ': ' + port+'  ' + 'mode ' + redis.mode);
exports.redis = redis;
