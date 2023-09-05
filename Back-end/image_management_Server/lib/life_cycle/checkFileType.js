/**
 * Checks the file type of a given file path using the `file` command.
 * @param {string} filePath - The path of the file to check.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the file is a JPEG, PNG, JPEG, or RAW image.
 */
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
