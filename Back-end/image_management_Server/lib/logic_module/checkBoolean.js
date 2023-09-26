// @ts-nocheck
// Purpose: Validates input as a boolean.


/**
 * Validates input to ensure it is a string of "true" or "false".
 * @async
 * @function validateInput_booleam
 * @param {...string} inputs - The input(s) to be validated.
 * @returns {Promise<void>} - A Promise that resolves if all inputs are valid, and rejects with an error if any input is invalid.
 * @throws {Error} - Invalid input type. Input must be a string of "true" or "false".
 */
async function validateInput_booleam(...inputs) {
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


/**
 * Validates if the input is a negative number.
 * @async
 * @function validateInput_is_negative_number
 * @param {...number} inputs - The input(s) to be validated.
 * @returns {Promise<void>} - A Promise that resolves if all inputs are non-negative numbers, and rejects with an error otherwise.
 * @throws {Error} - If any input is a negative number, an error with message "Invalid input type. Input must be a non-negative number." will be thrown.
 */
async function validateInput_is_negative_number(...inputs) {
  return new Promise((resolve, reject) => {
    for (let input of inputs) {
      //判断是否有负数
      if (input < 0) {
        reject(new Error('Invalid input type. Input must be a string of "true" or "false".'));
        return; // Stop the loop if any input is invalid
      }
    }
    resolve();
  });
}


/**
 * Validates if the input is null or empty.
 * @param  {...any} inputs - The inputs to be validated.
 * @returns {Promise<void>} - A Promise that resolves if all inputs are valid, or rejects with an Error if any input is invalid.
 */
async function validateInput_is_null_or_empty(...inputs) {
  //判断是否为null或者是Undefined
  return new Promise((resolve, reject) => {
    for (let input of inputs) {
      if (input == null || input == undefined || input == '') {
        reject(new Error('Invalid input type. Input must be a meanful value.'));
        return; // Stop the loop if any input is invalid
      }
    }
    resolve();
  });
}
module.exports = { validateInput_booleam, validateInput_is_negative_number, validateInput_is_null_or_empty };