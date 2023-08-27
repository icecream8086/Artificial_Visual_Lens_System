const { exec } = require('child_process');

function checkFileType(filePath) {
  return new Promise((resolve, reject) => {
    const command = `file -b --mime-type ${filePath}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        const fileType = stdout.trim();
        const isJpg = fileType === 'image/jpeg';
        const isPng = fileType === 'image/png';
        const isJpeg = fileType === 'image/jpeg';
        const isRaw = fileType === 'image/x-raw';

        resolve(isJpg || isPng || isJpeg || isRaw);
      }
    });
  });
}


module.exports = {
  checkFileType
};

// 示例用法
