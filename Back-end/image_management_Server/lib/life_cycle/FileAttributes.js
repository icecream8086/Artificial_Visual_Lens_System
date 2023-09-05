const fs = require('fs');

function getFileAttributes(filePath) {
    return new Promise((resolve, reject) => {
      fs.stat(filePath, (err, stats) => {
        if (err) {
          reject(err);
        } else {
          const attributes = {
            format: getFileFormat(filePath),
            size: stats.size,
            mode: stats.mode,
            mod_time: stats.mtime,
            access_time: stats.atime,
            create_time: stats.birthtime,
            file_size: getFileSizeOnDisk(filePath),
            disk_usage: stats.blocks * stats.blksize,
            path: filePath
          };
          resolve(attributes);
        }
      });
    });
  }
  
  function getFileFormat(filePath) {
    // 获取文件扩展名作为文件格式
    return filePath.split('.').pop();
  }
  
  function getFileSizeOnDisk(filePath) {
    // 获取文件在磁盘上占用的空间
    const stats = fs.statSync(filePath);
    return stats.blocks * stats.blksize;
  }
  
module.exports={
    getFileAttributes
}
