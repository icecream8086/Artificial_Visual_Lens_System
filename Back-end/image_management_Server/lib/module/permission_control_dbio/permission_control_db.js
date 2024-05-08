const query = require('../../datasource/mysql_connection_promise');  // Database connection

// 通过先查询用户组的权限然后针对用户的权限进行或运算
// 通过这组合权限的方式来实现权限的合并,模拟加入离开用户组的操作
class User {
    constructor(name, roles) {
        this.name = name;
        this.roles = roles;
    }

    async saveToDB() {
        let sql = 'INSERT INTO dag_users (name, roles) VALUES (?, ?)';
        await query(sql, [this.name, JSON.stringify(this.roles)]);
    }
}

class Nodes {
    constructor(name, permissions, priority) {
        this.name = name;
        this.permissions = permissions;
        this.priority = priority;
    }

    async saveToDB() {
        let sql = 'INSERT INTO nodes (name, permissions, priority) VALUES (?, ?, ?)';
        await query(sql, [this.name, JSON.stringify(this.permissions), this.priority]);
    }
}

class DAG {
    constructor() {
        this.graph = {};
        this.users = {};
        this.loadNodesFromDB();
        this.loadUsersFromDB();
    }
    async loadNodesFromDB() {
        let sql = 'SELECT * FROM nodes';
        let result = await query(sql);
        for (let row of result) {
            let node = new Nodes(row.name, JSON.parse(row.permissions), row.priority);
            this.graph[node.name] = node;
        }
    }
    async loadUsersFromDB() {
        let sql = 'SELECT * FROM dag_users';
        let result = await query(sql);
        for (let row of result) {
            let user = new User(row.name, JSON.parse(row.roles));
            this.users[user.name] = user;
        }
    }
    async addNode(node) {
        try {
        // 检查是否已经存在具有相同名称的节点
        if (this.graph.hasOwnProperty(node.name)) {
            throw new Error(`A node with the name "${node.name}" already exists.`);
        }
    
        await node.saveToDB();
        this.graph[node.name] = node;
        
        }
        catch (error) {
            // ER_DUP_ENTRY: Duplicate entry 'user_group5' for key 'nodes.nodes_UN'
            if (error.code === 'ER_DUP_ENTRY') {
                throw new Error(`A node with the name "${node.name}" already exists.`);
            }
        }
    }

    async addUser(user) {
        await user.saveToDB();
        this.users[user.name] = user;
    }
    async removeUser(userName) {
        // 从数据库中移除用户
        let sql = 'DELETE FROM dag_users WHERE name = ?';
        await query(sql, [userName]);

        // 从内存中移除用户
        if (userName in this.users) {
            delete this.users[userName];
        }
    }

    async removeNode(nodeName) {
        let sql = 'DELETE FROM nodes WHERE name = ?';
        try {
            await query(sql, [nodeName]);
            if (nodeName in this.graph) {
                delete this.graph[nodeName];
            }
        } catch (error) {
            if (error.code === 'ER_ROW_IS_REFERENCED_2') {
                throw new Error(`Node "${nodeName}" cannot be deleted because it has dependencies.`);
            } else {
                throw error;
            }
        }
    }
    async updateNodePermissions(nodeName, newPermissions, newPriority) {
        // 从数据库中获取权限组
        let sql = 'SELECT * FROM nodes WHERE name = ?';
        let result = await query(sql, [nodeName]);
        if (result.length === 0) {
            throw new Error(`Node "${nodeName}" does not exist.`);
        }

        // 更新权限组的内容
        let node = new Nodes(result[0].name, JSON.parse(result[0].permissions), result[0].priority);
        node.permissions = newPermissions;

        // 如果传入了新的优先级，那么更新权限组的优先级
        if (newPriority !== undefined) {
            node.priority = newPriority;
        }

        // 将更新后的权限组保存回数据库
        sql = 'UPDATE nodes SET permissions = ?, priority = ? WHERE name = ?';
        await query(sql, [JSON.stringify(node.permissions), node.priority, nodeName]);

        // 更新内存中的权限组
        this.graph[nodeName] = node;
    }
    async checkUserPermissions(userName, permissionsToCheck,debug = true) {
        // 从数据库中获取用户
        let sql = 'SELECT roles FROM dag_users WHERE name = ?';
        let result = await query(sql, [userName]);
        if (result.length === 0) {
            throw new Error(`User "${userName}" does not exist.`);
        }
        // 获取用户的权限组
        let userRoles = JSON.parse(result[0].roles);
        // 合并用户的所有权限
        let userPermissions = {};
        if (debug) {
            console.log('User roles:', userRoles);
        }
        for (let roleName of userRoles) {
            // 从数据库中获取角色
            sql = 'SELECT * FROM nodes WHERE name = ?';
            let roleResult = await query(sql, [roleName]);
            if (roleResult.length === 0) {
                throw new Error(`Role "${roleName}" does not exist.`);
            }
            
            let role = new Nodes(roleResult[0].name, JSON.parse(roleResult[0].permissions), roleResult[0].priority);
            let rolePermissions = await this.getPermissions(role.name);
            for (let key in rolePermissions) {
                if (!userPermissions.hasOwnProperty(key) || rolePermissions[key] > userPermissions[key]) {
                    userPermissions[key] = rolePermissions[key];
                }
            }
        }
        if (debug) {
            console.log('User permissions:', userPermissions);
        }
    // 检查用户是否拥有所有要检查的权限
    if(debug){
        console.log('Permissions to check:', permissionsToCheck);
        console.log(typeof permissionsToCheck);
        console.log(typeof userPermissions);
    }
    for (let permission in permissionsToCheck) {
        if (!userPermissions.hasOwnProperty(permission) || userPermissions[permission] < permissionsToCheck[permission]) {
            return false;
        }
    }

    return true;
    }
    async addEdge(nodeName1, nodeName2) {
        let sql="";

        // 检查新添加的边是否会导致环路的出现
        if (this.hasCycle(nodeName1, nodeName2)) {
            throw new Error(`Adding the edge from "${nodeName1}" to "${nodeName2}" would cause a cycle.`);
        }

        sql = 'INSERT INTO edges (from_node_id, to_node_id) SELECT n1.id, n2.id FROM nodes n1, nodes n2 WHERE n1.name = ? AND n2.name = ?';
        await query(sql, [nodeName1, nodeName2]);
        if (nodeName1 in this.graph && nodeName2 in this.graph) {
            Object.assign(this.graph[nodeName1].permissions, this.graph[nodeName2].permissions);
        }
    }
    
    hasCycle(nodeName1, nodeName2) {
        // 检查是否存在环路，使用深度优先搜索，一旦触发环路会造成死循环
        let visited = {};
        let stack = [nodeName1];

        while (stack.length > 0) {
            let node = stack.pop();
            if (node === nodeName2) {
                return true;
            }

            if (!visited[node]) {
                visited[node] = true;
                for (let neighbor in this.graph[node]) {
                    stack.push(neighbor);
                }
            }
        }

        return false;
    }

    async updateUserRoles(userName, newRoles) {
        // 从数据库中获取用户
        let sql = 'SELECT * FROM dag_users WHERE name = ?';
        let result = await query(sql, [userName]);
        if (result.length === 0) {
            throw new Error(`User "${userName}" does not exist.`);
        }

        // 更新用户的权限组
        let user = new User(result[0].name, JSON.parse(result[0].roles));
        user.roles = newRoles;

        // 将更新后的用户保存回数据库
        sql = 'UPDATE dag_users SET roles = ? WHERE name = ?';
        await query(sql, [JSON.stringify(user.roles), userName]);

        // 更新内存中的用户
        this.users[userName] = user;
    }
    async removeEdge(nodeName1, nodeName2) {
        let sql = 'DELETE e FROM edges e JOIN nodes n1 ON e.from_node_id = n1.id JOIN nodes n2 ON e.to_node_id = n2.id WHERE n1.name = ? AND n2.name = ?';
        await query(sql, [nodeName1, nodeName2]);
        if (nodeName1 in this.graph && nodeName2 in this.graph) {
            for (let permission in this.graph[nodeName2].permissions) {
                if (permission in this.graph[nodeName1].permissions) {
                    delete this.graph[nodeName1].permissions[permission];
                }
            }
        }
    }

    async mergeUserRoles(userName1, userName2) {
        // 从数据库中获取两个用户
        console.log(userName1, userName2);
        let sql = 'SELECT * FROM dag_users WHERE name = ?';
        let result1 = await query(sql, [userName1]);
        let result2 = await query(sql, [userName2]);
        console.log(result1);
        if (result1.length === 0 || result2.length === 0) {
            throw new Error(`One or both users do not exist.`);
        }

        // 获取两个用户的权限
        let user1 = new User(result1[0].name, JSON.parse(result1[0].roles));
        let user2 = new User(result2[0].name, JSON.parse(result2[0].roles));

        // 合并权限
        let mergedRoles = Array.from(new Set([...user1.roles, ...user2.roles]));

        // 将合并后的权限返回给第一个用户
        user1.roles = mergedRoles;
        sql = 'UPDATE dag_users SET roles = ? WHERE name = ?';
        await query(sql, [JSON.stringify(user1.roles), userName1]);

        // 更新内存中的用户
        this.users[userName1] = user1;
    }
    async subtractUserRoles(userName1, userName2) {
        // 从数据库中获取两个用户
        let sql = 'SELECT * FROM dag_users WHERE name = ?';
        let result1 = await query(sql, [userName1]);
        let result2 = await query(sql, [userName2]);
        if (result1.length === 0 || result2.length === 0) {
            throw new Error(`One or both users do not exist.`);
        }

        // 获取两个用户的权限
        let user1 = new User(result1[0].name, JSON.parse(result1[0].roles));
        let user2 = new User(result2[0].name, JSON.parse(result2[0].roles));

        // 从用户A的权限中移除用户B的权限
        let subtractedRoles = user1.roles.filter(role => !user2.roles.includes(role));

        // 将移除后的权限返回给用户A
        user1.roles = subtractedRoles;
        sql = 'UPDATE dag_users SET roles = ? WHERE name = ?';
        await query(sql, [JSON.stringify(user1.roles), userName1]);

        // 更新内存中的用户
        this.users[userName1] = user1;

    }
    
    async compare_permission(userName1, userName2) {
        let sql = 'SELECT roles FROM users WHERE name = ?';
        let result1 = await query(sql, [userName1]);
        let userRoles1 = JSON.parse(result1[0].roles);

        let result2 = await query(sql, [userName2]);
        let userRoles2 = JSON.parse(result2[0].roles);

        let permissions1 = {};
        for (let role of userRoles1) {
            let rolePermissions = await this.getPermissions(role);
            for (let key in rolePermissions) {
                if (!permissions1.hasOwnProperty(key) || rolePermissions[key] > permissions1[key]) {
                    permissions1[key] = rolePermissions[key];
                }
            }
        }

        let permissions2 = {};
        for (let role of userRoles2) {
            let rolePermissions = await this.getPermissions(role);
            for (let key in rolePermissions) {
                if (!permissions2.hasOwnProperty(key) || rolePermissions[key] > permissions2[key]) {
                    permissions2[key] = rolePermissions[key];
                }
            }
        }

        for (let key in permissions1) {
            if (!permissions2.hasOwnProperty(key) || permissions1[key] > permissions2[key]) {
                return 1;
            }
        }

        for (let key in permissions2) {
            if (!permissions1.hasOwnProperty(key) || permissions2[key] > permissions1[key]) {
                return -1;
            }
        }

        return 0;
    }

    async getPermissions(nodeName) {
        let sql = 'SELECT permissions FROM nodes WHERE name = ?';
        let result = await query(sql, [nodeName]);
        let permissions = JSON.parse(result[0].permissions);
        if (!this.graph.hasOwnProperty(nodeName)) {
            throw new Error(`Node "${nodeName}" does not exist.`);
        }
        for (let key in permissions) {
            if (permissions[key] < this.graph[nodeName].priority) {
                permissions[key] = this.graph[nodeName].priority;
            }
        }
        return permissions;
    }
    async appendUserRoles(userName, newRoles) {
        // 从数据库中获取用户
        let sql = 'SELECT * FROM dag_users WHERE name = ?';
        let result = await query(sql, [userName]);
        if (result.length === 0) {
            throw new Error(`User "${userName}" does not exist.`);
        }

        // 获取用户的当前权限组
        let user = new User(result[0].name, JSON.parse(result[0].roles));

        // 将新的权限组追加到用户的权限组列表中
        user.roles = [...new Set([...user.roles, ...newRoles])];

        // 将更新后的用户保存回数据库
        sql = 'UPDATE dag_users SET roles = ? WHERE name = ?';
        await query(sql, [JSON.stringify(user.roles), userName]);

        // 更新内存中的用户
        this.users[userName] = user;
    }
    async getPriority(nodeName) {
        let sql = 'SELECT priority FROM nodes WHERE name = ?';
        let result = await query(sql, [nodeName]);
        return result[0].priority;
    }

    async checkPermission(userName, permission) {
        let sql = 'SELECT roles FROM users WHERE name = ?';
        let result = await query(sql, [userName]);
        let userRoles = JSON.parse(result[0].roles);

        let permissions = {};
        for (let role of userRoles) {
            let rolePermissions = await this.getPermissions(role);
            for (let key in rolePermissions) {
                if (!permissions.hasOwnProperty(key) || rolePermissions[key] > permissions[key]) {
                    permissions[key] = rolePermissions[key];
                }
            }
        }

        return permissions.hasOwnProperty(permission) && permissions[permission] > 0;
    }
    async printPermissions(nodeName,debug = false) {
        let sql = 'SELECT permissions FROM nodes WHERE name = ?';
        let result = await query(sql, [nodeName]);
        let permissions = JSON.parse(result[0].permissions);
        if (debug) {
            console.log(`Permissions for ${nodeName}:`, permissions);
        }
        return { nodeName: permissions };
    }
    async printDependencies(debug = false) {
        // 从数据库中获取所有的边
        let sql = 'SELECT n1.name AS from_node, n2.name AS to_node FROM edges e JOIN nodes n1 ON e.from_node_id = n1.id JOIN nodes n2 ON e.to_node_id = n2.id';
        let result = await query(sql);
        let dependencies = {};
        // 打印每个边的起始节点和结束节点
        if (debug) {
            for (let row of result) {
                console.log(`${row.from_node} -> ${row.to_node}`);
            }
        }
        for (let row of result) {
            if (!dependencies.hasOwnProperty(row.from_node)) {
                dependencies[row.from_node] = [];
            }
            dependencies[row.from_node].push(row.to_node);
        }
        return dependencies;
    }


}

class permission_access {
    async merge_permissions(permissionsList) {
        let mergedPermissions = {};
        for (let nodeName of permissionsList) {
            let sql = 'SELECT permissions FROM nodes WHERE name = ?';
            let result = await query(sql, [nodeName]);
            let permissions = JSON.parse(result[0].permissions);
            for (let permission in permissions) {
                let level = permissions[permission];
                if (!mergedPermissions.hasOwnProperty(permission) || level > mergedPermissions[permission]) {
                    mergedPermissions[permission] = level;
                }
            }
        }
        return [mergedPermissions];
    }
}

module.exports = {
    User,
    Nodes,
    DAG,
    permission_access
};

// # CREATE TABLE nodes (
//     #     id INT AUTO_INCREMENT PRIMARY KEY,
//     #     name VARCHAR(255) NOT NULL,
//     #     permissions JSON NOT NULL,
//     #     priority INT NOT NULL
//     # );
    
//     # CREATE TABLE edges (
//     #     id INT AUTO_INCREMENT PRIMARY KEY,
//     #     from_node_id INT,
//     #     to_node_id INT,
//     #     FOREIGN KEY (from_node_id) REFERENCES nodes(id),
//     #     FOREIGN KEY (to_node_id) REFERENCES nodes(id)
//     # );
    // # CREATE TABLE dag_users (
    //     #     id INT AUTO_INCREMENT PRIMARY KEY,
    //     #     name VARCHAR(255) NOT NULL,
    //     #     roles JSON NOT NULL
    //     # );