const { DAG, Nodes } = require('./permission_control_db');
const query = require('../../datasource/mysql_connection_promise');  // Database connection
// 创建 DAG 对象
let dag = new DAG();

// 创建权限组
async function createPermissionGroup(name, permissions, priority, debug = false) {
    if (debug) {
        console.log("createPermissionGroup");
        console.log("createPermissionGroup");
        console.log(typeof permissions);
    }
    let group = new Nodes(name, permissions, priority);
    await dag.addNode(group);
}

// 设置依赖关系
async function setDependency(child, parent) {
    // 检查传入的节点名称是否都存在于数据库中
    let sql = 'SELECT COUNT(*) AS count FROM nodes WHERE name IN (?, ?)';
    let result = await query(sql, [child, parent]);
    if (result[0].count < 2) {
        throw new Error(`One or both nodes do not exist.`);
    }
    await dag.addEdge(child, parent);
}

// 获取权限组
async function getPermissionGroup(name) {
    return await dag.printPermissions(name,true);
}

// 删除权限组
async function deletePermissionGroup(name) {
    await dag.removeNode(name);
}

async function modifyPermissionGroup(name, permissions, priority) {
    await dag.updateNodePermissions(name, permissions, priority);
}
// (async function() {
//     // 创建权限组
//     await createPermissionGroup('guest', { 'basic': 1 }, 1);
//     await createPermissionGroup('user', { 'intermediate': 2 }, 2);
//     await createPermissionGroup('admin', { 'advanced': 3 }, 3);

//     // 设置依赖关系
//     await setDependency('user', 'guest');
//     await setDependency('admin', 'user');
// })();

module.exports = {
    createPermissionGroup,
    setDependency,
    getPermissionGroup,
    deletePermissionGroup,
    modifyPermissionGroup
};