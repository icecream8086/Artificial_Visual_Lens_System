const bcrypt = require('bcrypt');

function generateSecurePassword() {
  const passwordLength = 10; // 密码长度
  const saltRounds = 10; // 加盐轮数
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err);
      } else {
        bcrypt.hash(generateRandomString(), salt, (err, hash) => {
          if (err) {
            reject(err);
          } else {
            resolve(hash);
          }
        });
      }
    });
  });
}

function generateRandomString(passwordLength=10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < passwordLength; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
}

module.exports = {
  generateSecurePassword
};


