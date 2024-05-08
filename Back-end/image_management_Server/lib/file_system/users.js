const query = require('../../lib/datasource/mysql_connection_promise');

async function get_group_id(uid) {
    try{
        if(uid==undefined){
            throw new Error("UID is undefined");
        }
        let sql = 'SELECT group_id FROM user_access_info where UID=?;';
        let result = await query(sql, [uid]);
        if(result.length==0){
            throw new Error("No group found for the user");
        }
        return result;
    }catch(err){
        throw new Error("Error in get_group_id: "+err.message);
    }
}
async function get_group_info(group_id ) {
    try{
        if(group_id==undefined){
            throw new Error("group_id is undefined");
        }
        let sql = 'SELECT group_info,group_id FROM group_info where group_id=?;';
        let result = await query(sql, [group_id]);
        if(result.length==0){
            throw new Error("No group found for the user");
        }
        return result;
    }catch(err){
        throw new Error("Error in get_group_info: "+err.message);
    }
}



module.exports = {
    get_group_id
}