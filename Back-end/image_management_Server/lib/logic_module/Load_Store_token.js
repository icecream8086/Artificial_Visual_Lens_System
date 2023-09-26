const generateSecurePassword = require("../hash/bcrypt");
const jwt = require('jsonwebtoken');
const redis = require('../datasource/redis_connection_promise'); // Redis connection

/**
 * @param {string} UID
 */
async function Store_token(UID) {
    try {
        let token_bcrypt = await generateSecurePassword.generateSecurePassword(128, 12);
        let token = jwt.sign({ UID: UID }, token_bcrypt, { algorithm: 'HS256' });
        redis.set(token, UID);
        redis.set(UID + "_key", token_bcrypt);
        redis.expire(token, 86400);
        redis.expire(token + "_key", 86400);
        return token;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    Store_token,
};
