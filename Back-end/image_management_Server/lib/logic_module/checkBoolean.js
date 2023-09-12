// @ts-nocheck
// /**
//  * Validates the input to ensure it is a string of "true" or "false".
//  * @param {string} input - The input to be validated.
//  * @returns {Promise<void>} - A Promise that resolves if the input is valid, and rejects with an error if it is not.
//  */
// // async function validateInput(input) {
// //     return new Promise((resolve, reject) => {
// //       if (typeof input !== 'string' || (input !== 'true' && input !== 'false' && input !== '0' && input !== '1')) {
// //         reject(new Error('Invalid input type. Input must be a string of "true" or "false".'));
// //       } else {
// //         resolve();
// //       }
// //     });
// //   }
  
  async function validateInput(...inputs) {
    return new Promise((resolve, reject) => {
      for (let input of inputs) {
        if (typeof input !== 'string' || (input !== 'true' && input !== 'false' && input !== '0' && input !== '1')) {
          reject(new Error('Invalid input type. Input must be a string of "true" or "false".'));
          return; // Stop the loop if any input is invalid
        }
      }
      resolve();
    });
  }
  
  module.exports = validateInput;