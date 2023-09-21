const fs = require('fs');
const crypto = require('crypto');


/**
 * Calculates the SHA-256 hash of an image file.
 * @param {string} filename - The path to the image file.
 * @returns {Promise<string>} - A promise that resolves with the SHA-256 hash of the image file.
 */

//doc : https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options
// note:
// 将获取图像 SHA256 哈希值的部分封装在了一个名为 getImageHash 的函数
// 使用 fs.readFile 方法读取图像文件,此时得到的 fileBuffer 
// 然后使用 crypto.createHash 创建 SHA256 哈希对象，并将图像内容添加到哈希对象中
// 最后使用哈希对象的 digest 方法计算哈希值，并将其作为 Promise 的返回值

function getImageHash(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, fileBuffer) => {
      if (err) {
        reject(err);
        return;
      }

      const sha256 = crypto.createHash('sha256');
      sha256.update(fileBuffer);
      const sha256Code = sha256.digest('hex');

      resolve(sha256Code);
    });
  });
}

module.exports = getImageHash;