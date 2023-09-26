/**
 * Performs a topological sort on a directed acyclic graph (DAG).
 * 这个函数接受一个对象作为参数，
 * 对象的键是节点的名称，值是一个数组
 * 表示从该节点出发可以到达的其他节点。
 * 函数返回一个数组，表示按照拓扑排序的顺序排列的节点名称
 * 
 *                         !!! Warning !!!
 *                          !!! 警告 !!!
 *
 * 该函数假设输入的图必须为一个 DAG(有向无环图)。如果图中包含环路，该函数将抛出错误。
 * 
 * @param {Object} graph - The DAG to be sorted, represented as an object where each key is a node and its value is an array of edges.
 * @returns {Array} - An array of nodes in topologically sorted order.
 */


function topologicalSort(graph) {
  const visited = new Set();
  const sorted = [];
  const temp = new Set();

  function visit(node) {
    if (temp.has(node)) {
      throw new Error('The graph contains a cycle');
    }

    if (visited.has(node)) {
      return;
    }

    visited.add(node);
    temp.add(node);

    const edges = graph[node] || [];

    for (const edge of edges) {
      visit(edge);
    }

    temp.delete(node);
    sorted.unshift(node);
  }

  for (const node in graph) {
    visit(node);
  }

  return sorted;
}

module.exports = { topologicalSort };
