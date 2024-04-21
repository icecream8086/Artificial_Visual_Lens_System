/* eslint-disable no-undef */
const { topologicalSort,sortComponentsByPriority} = require('../Ferrite_cores');

describe('topologicalSort', () => {
  it('should return an empty array when startRole is not in dependencyMap', () => {
    const startRole = 'A';
    const dependencyMap = {
      B: ['C'],
      C: ['D'],
      D: ['E'],
    };

    const result = topologicalSort(startRole, dependencyMap);

    expect(result).toEqual([]);
  });

  it('should return the correct sorted roles when startRole is in dependencyMap', () => {
    const startRole = 'A';
    const dependencyMap = {
      A: ['B', 'C'],
      B: ['D'],
      C: ['D'],
      D: ['E'],
    };

    const result = topologicalSort(startRole, dependencyMap);

    expect(result).toEqual(['A', 'C', 'B', 'D', 'E']);
  });

  it('should handle circular dependencies correctly', () => {
    const startRole = 'A';
    const dependencyMap = {
      A: ['B'],
      B: ['C'],
      C: ['A'],
    };

    const result = topologicalSort(startRole, dependencyMap);

    expect(result).toEqual([]);
  });
});/* eslint-disable no-undef */

describe('topologicalSort', () => {
  // Existing tests...

  it('should return an empty array when startRole is not in dependencyMap', () => {
    // Existing test code...
  });

  it('should return the correct sorted roles when startRole is in dependencyMap', () => {
    // Existing test code...
  });

  it('should handle circular dependencies correctly', () => {
    // Existing test code...
  });
});

describe('sortComponentsByPriority', () => {
  it('should return an empty array when components is not an array', () => {
    const components = null;

    const result = sortComponentsByPriority(components);

    expect(result).toEqual([]);
  });

  it('should return the sorted components by priority', () => {
    const components = [
      { name: 'Component A', priority: 3 },
      { name: 'Component B', priority: 1 },
      { name: 'Component C', priority: 2 },
    ];

    const result = sortComponentsByPriority(components);

    expect(result).toEqual([
      { name: 'Component B', priority: 1 },
      { name: 'Component C', priority: 2 },
      { name: 'Component A', priority: 3 },
    ]);
  });
});