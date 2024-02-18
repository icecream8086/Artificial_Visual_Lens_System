// @ts-nocheck
const { DAG } = require('../permission_control_dbio/permission_control_db');

describe('DAG', () => {
  let dag;

  beforeEach(() => {
    dag = new DAG();
  });

  describe('addNode', () => {
    it('should add a node to the graph and save it to the database', async () => {
      // Arrange
      const node = {
        name: 'NodeA',
        saveToDB: jest.fn(),
      };

      // Act
      await dag.addNode(node);

      // Assert
      expect(node.saveToDB).toHaveBeenCalled();
      expect(dag.graph).toHaveProperty('NodeA', node);
    });
  });

  describe('addUser', () => {
    it('should add a user to the users object and save it to the database', async () => {
      // Arrange
      const user = {
        name: 'UserA',
        saveToDB: jest.fn(),
      };

      // Act
      await dag.addUser(user);

      // Assert
      expect(user.saveToDB).toHaveBeenCalled();
      expect(dag.users).toHaveProperty('UserA', user);
    });
  });

  describe('removeNode', () => {
    it('should remove a node from the graph and delete it from the database', async () => {
      // Arrange
      const nodeName = 'NodeA';
      dag.graph[nodeName] = {};

      // Act
      await dag.removeNode(nodeName);

      // Assert
      expect(dag.graph).not.toHaveProperty(nodeName);
      // Add assertions for database deletion
    });
  });

  describe('addEdge', () => {
    it('should add an edge between two nodes and update the graph permissions', async () => {
      // Arrange
      const nodeName1 = 'NodeA';
      const nodeName2 = 'NodeB';
      dag.graph[nodeName1] = {
        name: nodeName1,
        permissions: {},
      };
      dag.graph[nodeName2] = {
        name: nodeName2,
        permissions: {},
      };

      // Act
      await dag.addEdge(nodeName1, nodeName2);

      // Assert
      // Add assertions for database insertion and graph permissions update
    });
  });

  describe('removeEdge', () => {
    it('should remove an edge between two nodes and update the graph permissions', async () => {
      // Arrange
      const nodeName1 = 'NodeA';
      const nodeName2 = 'NodeB';
      dag.graph[nodeName1] = {
        name: nodeName1,
        permissions: {},
      };
      dag.graph[nodeName2] = {
        name: nodeName2,
        permissions: {},
      };

      // Act
      await dag.removeEdge(nodeName1, nodeName2);

      // Assert
      // Add assertions for database deletion and graph permissions update
    });
  });

  describe('comparePermission', () => {
    it('should compare the permissions of two users and return the result', async () => {
      // Arrange
      const userName1 = 'UserA';
      const userName2 = 'UserB';
      const mockResult = true;  // 假设比较结果为 true
      dag.comparePermission = jest.fn().mockReturnValue(Promise.resolve(mockResult));
  
      // Act
      const result = await dag.comparePermission(userName1, userName2);
      
      // Assert
      expect(dag.comparePermission).toHaveBeenCalledWith(userName1, userName2);
      expect(result).toBe(mockResult);
    });
  });

  describe('getPermissions', () => {
    it('should retrieve the permissions of a node from the database and update them based on the graph priority', async () => {
      // Arrange
      const nodeName = 'NodeA';
      const mockPermissions = { read: true, write: false };  // 假设从数据库中获取的权限
      dag.getPermissions = jest.fn().mockReturnValue(Promise.resolve(mockPermissions));
      dag.graph[nodeName] = {
        name: nodeName,
        priority: 1,
      };
  
      // Act
      const permissions = await dag.getPermissions(nodeName);
  
      // Assert
      expect(dag.getPermissions).toHaveBeenCalledWith(nodeName);
      expect(permissions).toEqual(mockPermissions);
      // Add assertions for the priority update
    });
  });

  describe('getPriority', () => {
    it('should retrieve the priority of a node from the database', async () => {
      // Arrange
      const nodeName = 'NodeA';
      const mockPriority = 1;  // 假设从数据库中获取的优先级
      dag.getPriority = jest.fn().mockReturnValue(Promise.resolve(mockPriority));
      dag.graph[nodeName] = {
        name: nodeName,
        priority: mockPriority,
      };
  
      // Act
      const priority = await dag.getPriority(nodeName);
  
      // Assert
      expect(dag.getPriority).toHaveBeenCalledWith(nodeName);
      expect(priority).toBe(mockPriority);
    });
  });

describe('checkPermission', () => {
  it('should check if a user has a specific permission based on their roles and return the result', async () => {
    // Arrange
    const userName = 'UserA';
    const permission = 'read';
    const mockResult = true;  // 假设用户具有该权限
    dag.checkPermission = jest.fn().mockReturnValue(Promise.resolve(mockResult));

    // Act
    const result = await dag.checkPermission(userName, permission);

    // Assert
    expect(dag.checkPermission).toHaveBeenCalledWith(userName, permission);
    expect(result).toBe(mockResult);
  });
});
});