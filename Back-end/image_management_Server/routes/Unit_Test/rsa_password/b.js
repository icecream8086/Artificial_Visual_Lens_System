const crypto = require('crypto');
const fs = require('fs');

/**
 *  useage 1: check key pair is aviailable
 */

const publicKey = fs.readFileSync('public_key.pem', 'utf-8');
const privateKey = fs.readFileSync('private_key.pem', 'utf-8');
const data = 'hello world';
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(data));
const decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log(decrypted.toString()); // 输出 hello world