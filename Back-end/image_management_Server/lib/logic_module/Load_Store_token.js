const generateSecurePassword = require("../hash/bcrypt");
const jwt = require('jsonwebtoken');
const redis = require('../datasource/redis_connection_promise'); // Redis connection

/**
 * @param {Number} UID
 */
async function Store_token(UID,effective_time=86400) {
    // effective_time = 86400=24 hours
    try {
        let token_bcrypt = await generateSecurePassword.generateSecurePassword(128, 12);
        let token = jwt.sign({ UID: UID }, token_bcrypt, { algorithm: 'HS256' });
        redis.set(token, UID.toString());
        redis.set(UID + "_key", token_bcrypt);
        redis.expire(token, effective_time);
        redis.expire(token + "_key", effective_time);
        return token;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    Store_token,
};
