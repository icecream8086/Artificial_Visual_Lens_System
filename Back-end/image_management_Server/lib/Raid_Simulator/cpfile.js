// @ts-nocheck
const fs = require('fs');
const path = require('path');

/**
 * 将指定文件剪切到另一个目录。
 * @param {string} sourcePath - 要剪切的文件路径。
 * @param {string} destinationPath - 目标目录路径。
 * @returns {Promise<void>} - Promise 对象，表示操作完成。
 */
function moveFile(sourcePath, destinationPath) {
  return new Promise((resolve, reject) => {
    // 获取文件名
    const fileName = path.basename(sourcePath);

    // 拼接目标路径
    const destinationFilePath = path.join(destinationPath, fileName);

    // 剪切文件
    fs.rename(sourcePath, destinationFilePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {moveFile};

// Test Example

moveFile(sourcePath, destinationPath)
  .then(() => {
    console.log('文件已成功剪切到目标目录！');
  })
  .catch((err) => {
    console.error('剪切文件时出错：', err);
  });