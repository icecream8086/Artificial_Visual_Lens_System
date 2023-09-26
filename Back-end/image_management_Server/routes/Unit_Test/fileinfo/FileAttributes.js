const { getFileAttributes } = require('../../../lib/life_cycle/FileAttributes');


const filename = '../../../File_Stream/Test/catch/eager-for-power.jpg';

  getFileAttributes(filename)
    .then(attributes => {
      console.log(attributes);
    })
    .catch(error => {
      console.error(error);
    });
  