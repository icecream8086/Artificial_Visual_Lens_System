const getImageHash = require('../../../lib/hash/sha_256');

const filename = '../../../File_Stream/Test/catch/eager-for-power.jpg';

getImageHash(filename)
  .then((sha256Code) => {
    console.log('图像 SHA256 哈希值:', sha256Code);
  })
  .catch((err) => {
    console.error('发生错误:', err);
  });

//   /home/zhangsan/Artificial_Visual_Lens_System/Back-end/image_management_Server/routes/Unit_Test/sha1
//   图像 SHA256 哈希值: 9e9152836d13a12d1b489da702b08ac1f79c6060297d5f11f179ce63c16e0a5e

/**
 * 
 *  Python eager-for-power.jpg  : fbb479d0a1fe42d6db7824bedc6cd3cb9cdcf0fd305d988173681e5f2dba57f9
 *  Node_JS eager-for-power.jpg : fbb479d0a1fe42d6db7824bedc6cd3cb9cdcf0fd305d988173681e5f2dba57f9
 * 
 */