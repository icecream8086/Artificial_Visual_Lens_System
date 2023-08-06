// @ts-nocheck
/**
 * Unzips a file to a specified destination.
 * @param {string} file - The path to the compressed file.
 * @param {string} destination - The path to the destination directory.
 * @returns {Promise<string>} A promise that resolves with the stdout of the unzip command.
 */
function unzip(file, destination) {
  // ...
}

/**
 * Unpacks a 7z file to a specified destination.
 * @param {string} file - The path to the compressed file.
 * @param {string} destination - The path to the destination directory.
 * @returns {Promise<string>} A promise that resolves with the stdout of the 7z command.
 */
function un7zip(file, destination) {
  // ...
}

/**
 * Decompresses a file to a specified destination.
 * @param {string} file - The path to the compressed file.
 * @param {string} destination - The path to the destination directory.
 * @returns {Promise<string>} A promise that resolves with the stdout of the decompression command.
 * @throws {Error} If the file format is not supported.
 */
function decompressFile(file, destination) {
  // ...
}

/**
 * Compresses a directory to a specified output file.
 * @param {string} sourceDir - The path to the source directory.
 * @param {string} outputFile - The path to the output file.
 * @param {string} comment - The comment to include in the compressed file.
 * @returns {Promise<string>} A promise that resolves with the stdout of the compression command.
 * @throws {Error} If the file format is not supported.
 */
function compressDirectory(sourceDir, outputFile, comment) {
  // ...
}
//
const { exec } = require('child_process');

function unzip(file, destination) {
  return new Promise((resolve, reject) => {
    const command = `unzip -q ${file} -d ${destination}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

function un7zip(file, destination) {
  return new Promise((resolve, reject) => {
    const command = `7z x ${file} -o${destination}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

function decompressFile(file, destination) {
  const extension = file.split('.').pop().toLowerCase();

  if (extension === 'zip') {
    return unzip(file, destination);
  } else if (extension === '7z') {
    return un7zip(file, destination);
  } else {
    return Promise.reject(new Error('Unsupported file format'));
  }
}

// // useage
// const inputFile = 'path/to/compressed/file.zip';
// const outputDirectory = 'path/to/output/directory';

// decompressFile(inputFile, outputDirectory)
//   .then(() => {
//     console.log('File decompressed successfully');
//   })
//   .catch((error) => {
//     console.error('Error decompressing file:', error);
//   });


function zip(sourceDir, outputFile, comment) {
  return new Promise((resolve, reject) => {
    const command = `zip -r ${outputFile} ${sourceDir} -z "${comment}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

function sevenZip(sourceDir, outputFile, comment) {
  return new Promise((resolve, reject) => {
    const command = `7z a ${outputFile} ${sourceDir} -p -mhe -sccUTF-8 -mx0 -mmt -mms -mmf -mm=${comment}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}

function compressDirectory(sourceDir, outputFile, comment) {
  const extension = outputFile.split('.').pop().toLowerCase();

  if (extension === 'zip') {
    return zip(sourceDir, outputFile, comment);
  } else if (extension === '7z') {
    return sevenZip(sourceDir, outputFile, comment);
  } else {
    return Promise.reject(new Error('Unsupported file format'));
  }
}

// // 使用例子
// const sourceDirectory = 'path/to/source/directory';
// const outputFile = 'path/to/output/file.zip';
// const comment = 'This is a comment for the compressed file';

// compressDirectory(sourceDirectory, outputFile, comment)
//   .then(() => {
//     console.log('Directory compressed successfully');
//   })
//   .catch((error) => {
//     console.error('Error compressing directory:', error);
//   });

module.exports = {
  decompressFile,
  compressDirectory,
};