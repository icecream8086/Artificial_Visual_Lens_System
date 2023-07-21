const { redis } = require('./redis_connection');

//promise 封装
const get = (key) => {
    return new Promise((resolve, reject) => {
        redis.get(key, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const getall = () => {
    return new Promise((resolve, reject) => {
        redis.getall((err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const expire = (key, time) => {
    return new Promise((resolve, reject) => {
        redis.expire(key, time, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const set = (key, value) => {
    return new Promise((resolve, reject) => {
        redis.set(key, value, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const del = (key) => {
    return new Promise((resolve, reject) => {
        redis.del(key, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const keys = (key) => {
    return new Promise((resolve, reject) => {
        redis.keys(key, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const flushall = () => {
    return new Promise((resolve, reject) => {
        redis.flushall((err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    get,
    set,
    del,
    keys,
    flushall,
    expire,
    getall
}
