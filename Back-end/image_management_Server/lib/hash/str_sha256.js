const crypto = require('crypto');

async function get_str_sha256(str){
    const sha256 = crypto.createHash('sha256');
    sha256.update(str);
    const sha256Code = sha256.digest('hex');
    return sha256Code;
}

module.exports = {get_str_sha256};