const { redis } = require('./redis_connection');

/**
 * Selects the given Redis database.
 * @param {number} db - The database number to select.
 * @returns {Promise<any>} - A Promise that resolves with the result of the select operation, or rejects with an error.
 */
const select = (db) => {
    return new Promise((resolve, reject) => {
        redis.select(db, (/** @type {any} */ err, /** @type {any} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

/**
 * Retrieves the value associated with the given key from Redis.
 * @param {string} key - The key to retrieve the value for.
 * @returns {Promise<string>} - A promise that resolves with the value associated with the given key, or rejects with an error if there was a problem retrieving the value.
 */
const get = (key) => {
    return new Promise((resolve, reject) => {
        redis.get(key, (/** @type {any} */ err, /** @type {string | PromiseLike<string>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

/**
 * Retrieves the values of all the specified keys from Redis.
 * @param  {...string} keys - The keys to retrieve values for.
 * @returns {Promise<string[]>} A promise that resolves to an array of values corresponding to the specified keys.
 */
const get_all = (...keys) => {
    return new Promise((resolve, reject) => {
        redis.mget(...keys, (/** @type {any} */ err, /** @type {string[] | PromiseLike<string[]>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}




/**
 * Returns a promise that resolves with all the data stored in Redis.
 * @returns {Promise<any>} A promise that resolves with the data stored in Redis.
 */
const get_all_data = () => {
    return new Promise((resolve, reject) => {
        redis.getall((/** @type {any} */ err, /** @type {any} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

/**
 * Sets an expiration time (in seconds) for a Redis key.
 * @param {string} key - The Redis key to set the expiration time for.
 * @param {number} time - The expiration time (in seconds).
 * @returns {Promise<number>} - A Promise that resolves with the result of the Redis expire command.
 */
const expire = (key, time) => {
    return new Promise((resolve, reject) => {
        redis.expire(key, time, (/** @type {any} */ err, /** @type {number | PromiseLike<number>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}



/**
 * Sets a key-value pair in Redis and returns a Promise that resolves to the result.
 * @param {string} key - The key to set in Redis.
 * @param {string} value - The value to set for the key in Redis.
 * @returns {Promise<any>} - A Promise that resolves to the result of setting the key-value pair in Redis.
 */
const set = (key, value) => {
    return new Promise((resolve, reject) => {
        redis.set(key, value, (/** @type {any} */ err, /** @type {any} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

/**
 * Sets multiple key-value pairs in Redis using the MSET command.
 * @param {...string} key_value_pairs - A list of key-value pairs to set in Redis.
 * @returns {Promise<string>} - A Promise that resolves with the string "OK" if the operation was successful.
 * @throws {Error} - If there was an error setting the key-value pairs in Redis.
 */
const set_all = (...key_value_pairs) => {
    return new Promise((resolve, reject) => {
        redis.mset(...key_value_pairs, (/** @type {any} */ err, /** @type {string | PromiseLike<string>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

/**
 * Deletes a key from Redis.
 * @param {string} key - The key to be deleted.
 * @returns {Promise<number>} - A promise that resolves with the number of keys deleted.
 */
const del = (key) => {
    return new Promise((resolve, reject) => {
        redis.del(key, (/** @type {any} */ err, /** @type {number | PromiseLike<number>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const del_all = (/** @type {any[]} */ ...keys) => {
    return new Promise((resolve, reject) => {
        redis.del(...keys, (/** @type {any} */ err, /** @type {any} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}


/**
 * Returns a promise that resolves to an array of all keys matching the given pattern.
 * @param {string} key - The pattern to match keys against.
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of all keys matching the given pattern.
 */
const keys = (key) => {
    return new Promise((resolve, reject) => {
        redis.keys(key, (/** @type {any} */ err, /** @type {string[] | PromiseLike<string[]>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

/**
 * Flushes all keys from Redis cache.
 * @returns {Promise} A promise that resolves with the result of the flushall operation or rejects with an error.
 */
const flushall = () => {
    return new Promise((resolve, reject) => {
        redis.flushall((/** @type {any} */ err, /** @type {any} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

/**
 * Flushes the Redis database.
 * @returns {Promise} A Promise that resolves with the result of the flushdb command, or rejects with an error.
 */
const flushdb = () => {
    return new Promise((resolve, reject) => {
        redis.flushdb((/** @type {any} */ err, /** @type {any} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const incr = (key) => {
    return new Promise((resolve, reject) => {
        redis.incr(key, (/** @type {any} */ err, /** @type {number | PromiseLike<number>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}


const decr = (key) => {
    return new Promise((resolve, reject) => {
        redis.decr(key, (/** @type {any} */ err, /** @type {number | PromiseLike<number>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const zadd = (key, score, value) => {
    return new Promise((resolve, reject) => {
        redis.zadd(key, score, value, (/** @type {any} */ err, /** @type {number | PromiseLike<number>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const zrange = (key, start, stop) => {
    return new Promise((resolve, reject) => {
        redis.zrange(key, start, stop, (/** @type {any} */ err, /** @type {string[] | PromiseLike<string[]>} */ result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const zrem = (key, value) => {
    return new Promise((resolve, reject) => {
        redis.zrem(key, value, (/** @type {any} */ err, /** @type {number | PromiseLike<number>} */ result) => {
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
    get_all_data,
    select,
    flushdb,
    get_all,
    set_all,
    del_all,
    incr,
    zadd,
    decr,
    zrange,
    zrem
}
