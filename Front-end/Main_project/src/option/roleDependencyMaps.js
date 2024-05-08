/**
 * Role dependency map.
 * @type {Object.<string, string[]>}
 */

//说明:
// 每个角色都有一个依赖数组，数组中的元素是角色名，表示当前角色依赖于数组中的角色。
// ！ 依赖数组中的角色不能依赖于当前角色。
// 比如:
//     [ √ ] guest: ['user']
//     [ × ] guest: ['guest']
//     [ × ] guest: ['user', 'guest']
//     [ × ] guest: ['user', 'admin', 'guest']
//     [ × ] guest: ['user', 'admin', 'user'] 
// 这么做会导致循环依赖，从而导致无限循环。
// 也可以用于加载其他组件


const roleDependencyMap = {
    user: [],
    guest: ['user'],
    admin: ['user'],
};

module.exports = roleDependencyMap;