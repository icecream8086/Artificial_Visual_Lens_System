/* eslint-disable no-prototype-builtins */
/**
 * Performs a topological sort on a directed acyclic graph (DAG) represented by a dependency map.
 * 
 * @param {string} startRole - The starting role for the topological sort.
 * @param {Object.<string, string[]>} dependencyMap - The dependency map representing the graph.
 * @returns {string[]} - An array of roles sorted in topological order.
 */
function topologicalSort(startRole, dependencyMap) {
    if (!dependencyMap.hasOwnProperty(startRole)) {
        return [];
    }

    const sortedRoles = [];
    const visited = {};
    const recStack = {};

    function visit(role) {
        if (recStack[role]) {
            // A cycle detected
            return true;
        }

        if (visited[role]) return false;

        visited[role] = true;
        recStack[role] = true;
        const dependencies = dependencyMap[role] || [];

        for (const dependency of dependencies) {
            if (visit(dependency)) {
                // A cycle detected
                return true;
            }
        }

        sortedRoles.unshift(role);
        recStack[role] = false;
        return false;
    }

    if (visit(startRole)) {
        // A cycle detected
        return [];
    }

    return sortedRoles;
}

function sortComponentsByPriority(components) {
    if (!Array.isArray(components)) {
        return [];
    }
    return components.sort((a, b) => a.priority - b.priority);
}

// Path: src/lib/Ferrite.js
module.exports = {
    topologicalSort,
    sortComponentsByPriority,
}