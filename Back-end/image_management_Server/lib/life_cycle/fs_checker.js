const fs = require('fs');

function trackFileChanges(filePath) {
  fs.watch(filePath, (eventType, filename) => {
    if (eventType === 'change') {
      console.log(`File ${filename} has been modified.`);
    } else if (eventType === 'rename') {
      console.log(`File ${filename} has been renamed.`);
    }
  });
}

// // 使用示例
// trackFileChanges('file.txt');

module.exports = {
    trackFileChanges
};