/* eslint-disable no-undef */

// const { LocalStorageJSON } = require('./');
const {LocalStorageJSON} = require('../browser_IO/LocalStorage');

// 测试写入数据
test('write should store data in localStorage', () => {
  const localStorageMock = {
    setItem: jest.fn(),
  };
  global.localStorage = localStorageMock;

  const localStorageJSON = new LocalStorageJSON();
  const data = { name: 'John', age: 30 };
  localStorageJSON.write('user', data);

  expect(localStorageMock.setItem).toHaveBeenCalledWith('user', JSON.stringify(data));
});

// 测试读取数据
test('read should return parsed data from localStorage', () => {
  const localStorageMock = {
    getItem: jest.fn().mockReturnValue(JSON.stringify({ name: 'John', age: 30 })),
  };
  global.localStorage = localStorageMock;

  const localStorageJSON = new LocalStorageJSON();
  const data = localStorageJSON.read('user');

  expect(localStorageMock.getItem).toHaveBeenCalledWith('user');
  expect(data).toEqual({ name: 'John', age: 30 });
});

// 测试删除数据
test('unlink should remove data from localStorage', () => {
  const localStorageMock = {
    removeItem: jest.fn(),
  };
  global.localStorage = localStorageMock;

  const localStorageJSON = new LocalStorageJSON();
  localStorageJSON.unlink('user');

  expect(localStorageMock.removeItem).toHaveBeenCalledWith('user');
});

// 测试检查数据是否存在
test('exists should return true if data exists in localStorage', () => {
  const localStorageMock = {
    getItem: jest.fn().mockReturnValue(JSON.stringify({ name: 'John', age: 30 })),
  };
  global.localStorage = localStorageMock;

  const localStorageJSON = new LocalStorageJSON();
  const exists = localStorageJSON.exists('user');

  expect(localStorageMock.getItem).toHaveBeenCalledWith('user');
  expect(exists).toBe(true);
});

// 测试清空所有数据
test('clear should remove all data from localStorage', () => {
  const localStorageMock = {
    clear: jest.fn(),
  };
  global.localStorage = localStorageMock;

  const localStorageJSON = new LocalStorageJSON();
  localStorageJSON.clear();

  expect(localStorageMock.clear).toHaveBeenCalled();
});
