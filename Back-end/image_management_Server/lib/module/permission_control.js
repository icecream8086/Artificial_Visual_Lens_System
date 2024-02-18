// 参考权限模型dag.py
//  实现一个基于DAG的权限控制模型，将pyhton代码等价替换成javascript代码,不作为案例使用
class User {
    constructor(name, roles) {
        this.name = name;
        this.roles = roles;
    }
}

class Nodes {
    constructor(name, permissions, priority) {
        this.name = name;
        this.permissions = permissions;
        this.priority = priority;
    }
}

class DAG {
    constructor() {
        this.graph = {};
        this.users = {};
    }

    addNode(node) {
        this.graph[node.name] = node;
    }

    addUser(user) {
        this.users[user.name] = user;
    }

    removeNode(nodeName) {
        if (nodeName in this.graph) {
            delete this.graph[nodeName];
        }
    }

    addEdge(nodeName1, nodeName2) {
        if (nodeName1 in this.graph && nodeName2 in this.graph) {
            Object.assign(this.graph[nodeName1].permissions, this.graph[nodeName2].permissions);
        }
    }

    removeEdge(nodeName1, nodeName2) {
        if (nodeName1 in this.graph && nodeName2 in this.graph) {
            for (let permission in this.graph[nodeName2].permissions) {
                if (permission in this.graph[nodeName1].permissions) {
                    delete this.graph[nodeName1].permissions[permission];
                }
            }
        }
    }

    getPermissions(nodeName) {
        let permissions = this.graph[nodeName].permissions;
        for (let key in permissions) {
            if (permissions[key] < this.graph[nodeName].priority) {
                permissions[key] = this.graph[nodeName].priority;
            }
        }
        return permissions;
    }

    getPriority(nodeName) {
        return this.graph[nodeName].priority;
    }

    static checkPermission(permissionName, permissionGroup) {
        // 检查权限组是否有某个权限
        return permissionName in permissionGroup;
    }
}

class permission_access{
    comparePermission(permissionName, groupA, groupB) {
        /**
         * 比较两个组的权限值
         *
         * @param {string} permissionName - 权限名称
         * @param {Object} groupA - 组A的权限字典
         * @param {Object} groupB - 组B的权限字典
         * @return {number} 如果组A的权限值大于组B，返回1；如果小于，返回-1；如果等于，返回0
         */
        let groupAPermission = groupA[permissionName] || 0;
        let groupBPermission = groupB[permissionName] || 0;
    
        if (groupAPermission > groupBPermission) {
            return 1;
        } else if (groupAPermission < groupBPermission) {
            return -1;
        } else {
            return 0;
        }
    }
    mergePermissions(permissionsList) {
        let mergedPermissions = {};
        for (let permissions of permissionsList) {
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
    