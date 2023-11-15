const fs = require('fs');
const exifParser = require('exif-parser');
const { exec } = require('child_process');

/**
 * 从JPEG图像中获取EXIF元数据
 * @param {string} filePath - 图像文件路径
 * @returns {Promise<Object>} 包含元数据的对象，如果出错则包含错误信息
 */
async function getExifData(filePath) {
// PNG 图像格式不支持 EXIF 元数据
// 这是 JPEG 和 TIFF 等格式特有的
// PNG 使用 "tEXt" 的块
// 可以用来存储一些元数据
// 但这种块的使用并不广泛
// 也没有标准化的方式来存储像 EXIF 那样的信息
  try {
    // Check file is jpg
    const fileType = await getFileType(filePath);
    if (!fileType.includes('JPEG')) {
      return { error: 'File is not a JPEG image' };
    }

    const buffer = await fs.promises.readFile(filePath);
    const parser = exifParser.create(buffer);
    const result = parser.parse();

    return {
      capture_date: result.tags.DateTimeOriginal,
      program_name: result.tags.Software,
      acquire_date: result.tags.DateTimeDigitized,
      copy_right: result.tags.Copyright
    };
  } catch (err) {
    return { error: err.message };
  }
}

function getFileType(filePath) {
  return new Promise((resolve, reject) => {
    exec(`file -b --mime-type "${filePath}"`, (error, stdout, stderr) => {
      if (error) {
        resolve({ error: error.message });
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

module.exports = {
  getExifData
}