const { topologicalSort } = require('../DAG');

const graph1 = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['d'],
  d: []
};

const graph2 = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['d'],
  d: ['a']
};

const graph3 = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['d'],
  d: ['e'],
  e: []
};

const graph4 = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['d'],
  d: ['b']
};


try {
  // expected output: ['a', 'c', 'b', 'd']
  console.log(topologicalSort(graph1)); 
} catch (error) {
    
    console.log(error.message);
}

try {
  // expected output: Error: Graph contains a cycle
  topologicalSort(graph2)
} catch (error) {
  console.log(error.message);
}


try {
  // expected output: ['a', 'c', 'b', 'd', 'e']
  console.log(topologicalSort(graph3)); 
} catch (error) {
    console.log(error.message);
}


try {
  // expected output: Error: Graph contains a cycle
  console.log(topologicalSort(graph4));
} catch (error) {
  console.log(error.message);
}