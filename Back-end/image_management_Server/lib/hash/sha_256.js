const fs = require('fs');
const crypto = require('crypto');
const { get } = require('http');

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

const filename = './temp_image.jpg';

getImageHash(filename)
  .then((sha256Code) => {
    console.log('图像 SHA256 哈希值:', sha256Code);
  })
  .catch((err) => {
    console.error('发生错误:', err);
  });

  module.exports = getImageHash;