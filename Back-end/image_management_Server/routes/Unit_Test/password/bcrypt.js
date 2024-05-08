const { generateSecurePassword } = require('../../../lib/hash/bcrypt');

generateSecurePassword()
  .then(securePassword => {
    console.log('securePassword', securePassword);
  })
  .catch(error => {
    console.error('发生错误：', error);
  });
