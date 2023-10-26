const crypto = require('crypto');
global.keyPair = null;

/**
 * Generates a new RSA key pair with a modulus length of 2048 bits.
 * @returns {Object} An object containing the generated public and private keys.
 */
function generateKeyPair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem'
    }
  });
  global.keyPair = { publicKey, privateKey };
  return { publicKey, privateKey };
}

/**
 * Encrypts the given data using the provided public key.
 * @param {string} data - The data to be encrypted.
 * @param {string} publicKey - The public key to use for encryption.
 * @returns {string} - The encrypted data in base64 format.
 */
function encrypt(data, publicKey) {
  const bufferData = Buffer.from(data, 'utf8');
  const bufferPublicKey = Buffer.from(publicKey, 'utf8');
  const encrypted = crypto.publicEncrypt(bufferPublicKey, bufferData);
  return encrypted.toString('base64');
}

/**
 * Decrypts the given data using the provided private key.
 * @param {string} data - The data to be decrypted in base64 format.
 * @param {string} privateKey - The private key to be used for decryption.
 * @returns {string} - The decrypted data as a string.
 */
function decrypt(data, privateKey) {
  const bufferData = Buffer.from(data, 'base64');
  const bufferPrivateKey = Buffer.from(privateKey, 'utf8');
  const decrypted = crypto.privateDecrypt(bufferPrivateKey, bufferData);
  return decrypted.toString('utf8');
}

module.exports = { generateKeyPair, encrypt, decrypt };


