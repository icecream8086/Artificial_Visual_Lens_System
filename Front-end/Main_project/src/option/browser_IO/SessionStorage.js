class SessionStorageJSON {
    // 写入数据
    write(key, data) {
      const jsonData = JSON.stringify(data);
      sessionStorage.setItem(key, jsonData);
    }
  
    // 读取数据
    read(key) {
      const jsonData = sessionStorage.getItem(key);
      return jsonData ? JSON.parse(jsonData) : null;
    }
  
    // 删除数据
    unlink(key) {
      sessionStorage.removeItem(key);
    }
  
    // 检查数据是否存在
    exists(key) {
      return sessionStorage.getItem(key) !== null;
    }
  
    // 清空所有数据
    clear() {
      sessionStorage.clear();
    }
  }

module.exports = {SessionStorageJSON};