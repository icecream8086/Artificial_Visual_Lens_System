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
