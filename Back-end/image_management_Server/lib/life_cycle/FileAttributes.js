const fs = require('fs').promises;

async function getFileAttributes(filePath) {
  try {
    const stats = await fs.stat(filePath);
    const attributes = {
      format: getFileFormat(filePath),
      size: stats.size,
      mode: stats.mode,
      mod_time: stats.mtime,
      access_time: stats.atime,
      create_time: stats.birthtime,
      file_size: await getFileSizeOnDisk(filePath),
      disk_usage: stats.blocks * stats.blksize,
      path: filePath
    };
    return attributes;
  } catch (err) {
    throw err;
  }
}

function getFileFormat(filePath) {
  // 获取文件扩展名作为文件格式
  return filePath.split('.').pop();
}

async function getFileSizeOnDisk(filePath) {
  // 获取文件在磁盘上占用的空间
  const stats = await fs.stat(filePath);
  return stats.blocks * stats.blksize;
}

module.exports = {
  getFileAttributes
}