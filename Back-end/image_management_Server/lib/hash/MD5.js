const fs = require('fs');
const crypto = require('crypto');

function getFileMD5(filename) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');
    const input = fs.createReadStream(filename);
    
    input.on('error', reject);
    input.on('data', (chunk) => hash.update(chunk));
    input.on('end', () => resolve(hash.digest('hex')));
  });
}

//---------------------Test------------------------------
getFileMD5('log.txt')
  .then(md5 => console.log(`MD5: ${md5}`))
  .catch(error => console.error(error));
