/**
 * Validates the token against the UID stored in Redis.
 * @param {string} token - The token to be validated.
 * @param {string} UID - The UID to be compared against the token.
 * @returns {Promise<void>} - A Promise that resolves if the token matches the UID, and rejects with an error otherwise.
 */
// @ts-nocheck
const redis=require('../datasource/redis_connection_promise');

function validateToken(token, UID) {
    return new Promise((resolve, reject) => {
      if (token === undefined || UID === undefined) {
        reject(new Error('Token or UID is undefined.'));
      }

      redis.get(token)
        .then((reply) => {
          if (reply !== UID) {
            reject(new Error('Token does not match UID. Please login again.'));
          } else {
            resolve();
          }
        })
        .catch(() => {
          reject(new Error('Redis error.'));
        });
    });
  }

  function validateToken_tf(token, UID) {
    return new Promise((resolve) => {
      if (token === undefined || UID === undefined) {
        resolve(false);
      }
  
      redis.get(token)
        .then((reply) => {
          if (reply !== UID) {
            resolve(false);
          } else {
            resolve(true);
          }
        })
        .catch(() => {
          resolve(false);
        });
    });
  }
  
  
module.exports={validateToken,validateToken_tf};


// //useage
// const token = 'valid_token';
// const UID = 'user_id';

// validateToken(token, UID)
//   .then(() => {
//     console.log('Token is valid.'); // if token is valid
//   })
//   .catch((error) => {
//     console.log('Token validation failed:', error.message); //if token is invalid
//   });