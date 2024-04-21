class LocalStorageJSON {
  // 写入数据
  write(key, data) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }

  // 读取数据
  read(key) {
    const jsonData = localStorage.getItem(key);
    return jsonData && jsonData !== 'undefined' ? JSON.parse(jsonData) : null;
  }

  // 删除数据
  unlink(key) {
    localStorage.removeItem(key);
  }

  // 检查数据是否存在
  exists(key) {
    return localStorage.getItem(key) !== null;
  }

  // 清空所有数据
  clear() {
    localStorage.clear();
  }
}

module.exports = { LocalStorageJSON };