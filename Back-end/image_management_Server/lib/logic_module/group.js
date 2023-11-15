const query = require('../datasource/mysql_connection_promise');

async function getGroupInfo(UID) {
    const sql = `SELECT * FROM user_access_info WHERE UID = ${UID}`;
    const result = await query(sql);
    return result;
}
module.exports = {
    getGroupInfo
}