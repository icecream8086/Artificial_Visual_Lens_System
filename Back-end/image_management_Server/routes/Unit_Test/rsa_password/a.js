const { generateKeyPair, encrypt, decrypt ,decrypt2} = require('../../../lib/hash/rsa_pwd');
const fs = require('fs');
// const { publicKey, privateKey } = generateKeyPair();


// const plaintext = 'Hello, world!';
// const ciphertext = encrypt(plaintext, publicKey);
// console.log(ciphertext);

let data="BFMEdk6wTlOQf/CU2uA1zA4mznur26Jnq7DYP7w2xkMAlOd2kugip3URvr6rEHCbB634e1o5mX0leMvEtDu/W4+bDUXZlZ0sosum6FKYfncqTzWN1q3KeHhZDmFvT1rFkifZdiYm4Xcn4Bv2K8grXeXGWKSrxyv1m6vmpRx34wK8jYTDagJoyNgPnnHpeaPYNwc3AxnVSMZZ40bUZJWwMX/5mjSywK7Tei4O8LdJko6ySe22QqONFNntcp4MjD6SmR/7LH7mvRBEUZUMENyJbeWOIQVF7/5C7NqGIA94lznw79Z3+CikuTk1DgyzifvA2x+HzbFRyF7+bne4K+xKJA==";
let pri_key= fs.readFileSync('private_key.pem', 'utf-8');
const decrypteds = decrypt(data,pri_key );
console.log(decrypteds);
// const decrypted = decrypt(data,pri_key );
// console.log(decrypted);