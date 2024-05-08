/* eslint-disable no-undef */
const { SessionStorageJSON } = require('../browser_IO/SessionStorage');

// 测试写入数据
test('write should store data in sessionStorage', () => {
  const sessionStorageMock = {
    setItem: jest.fn(),
  };
  global.sessionStorage = sessionStorageMock;

  const sessionStorageJSON = new SessionStorageJSON();
  const data = { name: 'John', age: 30 };
  sessionStorageJSON.write('user', data);

  expect(sessionStorageMock.setItem).toHaveBeenCalledWith('user', JSON.stringify(data));
});

// 测试读取数据
test('read should return parsed data from sessionStorage', () => {
  const sessionStorageMock = {
    getItem: jest.fn().mockReturnValue(JSON.stringify({ name: 'John', age: 30 })),
  };
  global.sessionStorage = sessionStorageMock;

  const sessionStorageJSON = new SessionStorageJSON();
  const data = sessionStorageJSON.read('user');

  expect(sessionStorageMock.getItem).toHaveBeenCalledWith('user');
  expect(data).toEqual({ name: 'John', age: 30 });
});

// 测试删除数据
test('unlink should remove data from sessionStorage', () => {
  const sessionStorageMock = {
    removeItem: jest.fn(),
  };
  global.sessionStorage = sessionStorageMock;

  const sessionStorageJSON = new SessionStorageJSON();
  sessionStorageJSON.unlink('user');

  expect(sessionStorageMock.removeItem).toHaveBeenCalledWith('user');
});

// 测试检查数据是否存在
test('exists should return true if data exists in sessionStorage', () => {
  const sessionStorageMock = {
    getItem: jest.fn().mockReturnValue(JSON.stringify({ name: 'John', age: 30 })),
  };
  global.sessionStorage = sessionStorageMock;

  const sessionStorageJSON = new SessionStorageJSON();
  const exists = sessionStorageJSON.exists('user');

  expect(sessionStorageMock.getItem).toHaveBeenCalledWith('user');
  expect(exists).toBe(true);
});

// 测试清空所有数据
test('clear should remove all data from sessionStorage', () => {
  const sessionStorageMock = {
    clear: jest.fn(),
  };
  global.sessionStorage = sessionStorageMock;

  const sessionStorageJSON = new SessionStorageJSON();
  sessionStorageJSON.clear();

  expect(sessionStorageMock.clear).toHaveBeenCalled();
});