/**
 * Tracks changes in a directory by watching for file changes and renames.
 * @param {string} directoryPath - The path of the directory to track changes for.
 */
const fs = require('fs');
const path = require('path');

function trackDirectoryChanges(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }
    
    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      fs.watch(filePath, (eventType, filename) => {
        if (eventType === 'change') {
          console.log(`File ${filename} in directory ${directoryPath} has been modified.`);
        } else if (eventType === 'rename') {
          console.log(`File ${filename} in directory ${directoryPath} has been renamed.`);
        }
      });
    });
    
    console.log(`Tracking changes for files in directory: ${directoryPath}`);
  });
}

module.exports = {
  trackDirectoryChanges
};