/**
 * Reads a text file line by line and logs each line to the console.
 * @async
 * @param {string} filePath - The path to the text file to read.
 * @returns {Promise<void>} - A Promise that resolves when the file has been read.
 */
const fs = require('fs');
const readline = require('readline');

async function readTextFileByLine(filePath) {
  try {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    for await (const line of rl) {
      console.log(line);
      // 在这里可以对每一行的内容进行处理或者保存到数组等
    }
  } catch (err) {
    console.error('Failed to read text file:', err);
  }
}

// // 使用示例
// readTextFileByLine('file.txt');

module.exports = {
    readTextFileByLine
};