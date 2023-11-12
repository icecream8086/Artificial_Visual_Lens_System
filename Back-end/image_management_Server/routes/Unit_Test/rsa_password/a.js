const { generateKeyPair, encrypt, decrypt } = require('../../../lib/hash/rsa_pwd');
const fs = require('fs');
// const { publicKey, privateKey } = generateKeyPair();


// const plaintext = 'Hello, world!';
// const ciphertext = encrypt(plaintext, publicKey);
// console.log(ciphertext);

let data="J7WwuDAbXglK83kU3/RwiE2gRPJjKVlEPRJXEVPdCLvK+G1bgifI1AeruU5xIaeJRe7cIU0vdi2t2KKFxQxI+dj7hIi2YmhWfnL3a4NsfpNBph7+0xEAVHC53H53O4pCgxQ4tuud6rt6wL4t5Vee5FiLLlq8KFkj9ayIWOwTE9ZagPHDqq45+IKeRf7vYlsiTUao69BEQQOXg2YDCsxWP+admguYQoNgTEGs8lmdu3VA8hxvUHgb3lTXShNhazhAgfrIJiLJ9yPmhFra0RFes+Rxc9kAb4SAxxH0QTMi6PZaP1Xho3kFrXgxirLNIJiKvrrZrmk5kdQTXYIt39H+rA==";
let pri_key= fs.readFileSync('private_key.pem', 'utf-8');
const decrypteds = decrypt(data,pri_key );
console.log(decrypteds);
// const decrypted = decrypt(data,pri_key );
// console.log(decrypted);