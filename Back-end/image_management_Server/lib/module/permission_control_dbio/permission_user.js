const {DAG, User} = require('./permission_control_db');
const query = require('../../datasource/mysql_connection_promise');  // Database connection

// 创建 DAG 对象
let dag = new DAG();

// 创建用户权限组
async function createPermissionUser(name, roles,flag="user") {
    //检查权限组和角色是否存在
    for (let role of roles) {
        let sql = 'SELECT * FROM nodes WHERE name = ?';
        let result = await query(sql, [role]);
        if (result.length === 0) {
            throw new Error('Role does not exist');
        }
    }
    if (flag === "user") {
        name = "user_" + name;
    }else if (flag === "group") {
        name = "group_" + name;
    }
    let user = new User(name, roles);
    await dag.addUser(user);
}



// 修改用户权限组,合并了删除功能,先获取组然后删除组,再创建组

async function updateUser(name, roles,flag="user") {
    if (flag === "user") {
        name = "user_" + name;
    }else if (flag === "group") {
        name = "group_" + name;
    }
    await dag.updateUserRoles(name, roles);
}
// 
async function appendPermissionUser(name, roles) {
    await dag.appendUserRoles(name, roles);
}

async function addUserToGroup(user, group) {
    await dag.mergeUserRoles(user, group);
}

async function removeUserFromGroup(user, group) {
    await dag.subtractUserRoles(user, group);
}

// 添加用户组

module.exports = {
    createPermissionUser,
    updateUser,
    addUserToGroup,
    removeUserFromGroup,
    appendPermissionUser
};


// 用户uid前缀为 user_ + uid
// 用户组前缀为 + group_ + group_id

// (async function() {
//     // 创建用户
//     await createPermissionUser('admin', ['user', 'admin']);
// })();

