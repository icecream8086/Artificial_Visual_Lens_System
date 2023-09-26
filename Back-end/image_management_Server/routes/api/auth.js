/**
 * Express router for user authentication.
 * @module authRouter
 */

const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const query = require('../../lib/datasource/mysql_connection_promise');  // Database connection
const redis = require('../../lib/datasource/redis_connection_promise'); // Redis connection
require('../../lib/logic_module/check_authority'); // authority check
const { Store_token } = require('../../lib/logic_module/Load_Store_token'); // token load and store
const validateToken = require('../../lib/logic_module/check_user');
const { validate_authority_root, validate_authority_admin } = require('../../lib/logic_module/check_authority');
/**
 * POST request to sign up a new user.
 * @name POST/api/auth/signup
 * @function
 * @memberof module:authRouter
 * @param {string} full_name - The full name of the user.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @param {string} email - The email of the user.
 * @returns {JSON} - A JSON object containing the user information and token.
 */
router.post('/signup', async (req, res, next) => {
  const { full_name, username, password, email } = req.body;
  try {
    // Check if username is present in the request body
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }

    // Check if username and email are already in use
    const checkUserQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';

    const checkUserResult = await query({
      sql: checkUserQuery,
      values: [username, email],
    });

    if (checkUserResult.length > 0) {
      console.log('Username or email already in use:', username, email);
      return res.status(400).json({ message: 'Username or email already in use' });
    }
    const encryptedPassword = password ? md5(password) : null;
    const insertUserResult = await query({
      sql: 'INSERT INTO users (full_name, username, password, email) VALUES (?, ?, ?, ?)',
      values: [full_name, username, encryptedPassword, email],
      // values: [full_name, username, password, email],
    });

    // Return the user information after successful registration
    res.json({
      // @ts-ignore
      UID: insertUserResult.insertId,
      full_name,
      username,
      email
    });
  } catch (error) {
    // Output error message
    console.error('Error during signup:', error);
    next(error);
  }
});

/**
 * POST request to log in a user.
 * @name POST/api/auth/login
 * @function
 * @memberof module:authRouter
 * @param {string} usernameOrEmail - The username or email of the user.
 * @param {string} password - The password of the user.
 * @returns {JSON} - A JSON object containing the user ID and token.
 */
router.post('/login', async (req, res, next) => {
  let results;
  try {
    const { usernameOrEmail, password } = req.body;
    if (!usernameOrEmail) {
      return res.status(400).json({ message: 'Username or email is required.' });
    }
    const result = await query({
      sql: `
        SELECT 
        users.UID,users.username, users.email, users.password, auth_info.allow_password_auth, banned_users.is_banned ,auth_info.force_change_password
        FROM 
          users
        LEFT JOIN
          auth_info ON users.UID = auth_info.UID
        LEFT JOIN 
          banned_users ON users.UID = banned_users.UID
        WHERE
          (users.username = ? OR users.email = ?) AND users.password = ?;
      `,
      values: [usernameOrEmail, usernameOrEmail, password],
    });
    results = JSON.parse(JSON.stringify(result));

    if (results.length === 0) {
      return res.status(401).json({ message: 'Username or email not found or password is incorrect.' });
    } else if (results[0].is_banned === 1) {
      return res.status(401).json({ message: 'User is banned.' });
    } else if (results[0].allow_password_auth === 0) {
      return res.status(401).json({ message: 'User is not allowed to login.' });
    } else if (results[0].force_change_password === 1) {

      return res.status(401).json({ message: 'User must change password.' });
    } else {
      // Redis get UID if not null
      let tokens = await Store_token(results[0].UID);
      return res.json({ UID: results[0].UID, token: tokens });
    }
  } catch (err) {
    console.error('Error during login:', err);
    next(err);
  }
});

/**
 * POST request to change a user's password.
 * @name POST/api/auth/change_password
 * @function
 * @memberof module:authRouter
 * @param {string} token - The token of the user.
 * @param {string} old_password - The old password of the user.
 * @param {string} new_password - The new password of the user.
 * @returns {JSON} - A JSON object containing a message indicating whether the password was changed successfully.
 */
router.post('/change_password', async (req, res, next) => {
  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    await validateToken(token, UID);
    await validate_authority_admin(UID);
    
    const { old_password, new_password } = req.body;
    const result = await query({
      sql: 'SELECT password FROM users WHERE UID = ?',
      values: [UID],
    });
    const results = JSON.parse(JSON.stringify(result));
    if (results[0].password !== old_password) {
      return res.status(401).json({ message: 'verify password failed ...' });
    }

    const updateResult = await query({
      sql: 'UPDATE users SET password = ? WHERE UID = ?',
      values: [new_password, UID],
    });
    return res.json({ message: 'Password changed successfully.' ,result:updateResult});

  } catch (err) {
    console.error('Error during change password:', err);
    next(err);
  }
});

/**
 * POST request to reset a user's password.
 * @name POST/api/auth/reset_password
 * @function
 * @memberof module:authRouter
 * @param {string} email - The email of the user.
 * @returns {JSON} - A JSON object containing a message indicating whether the password was reset successfully.
 */
router.post('/reset_password', async (req, res, next) => {

  try {
    const { email } = req.body;
    let UID = req.headers.uid;
    let token = req.headers.token;

    await validateToken(UID, token);
    await validate_authority_root(UID);

    const result = await query({
      sql: 'SELECT * FROM users WHERE email = ?',
      values: [email],
    });
    const results = JSON.parse(JSON.stringify(result));


    if (results.length === 0) {
      return res.status(401).json({ message: 'Email not found.' });
    }
    return res.json({ message: 'Password reset successfully.' });

  } catch (err) {
    console.error('Error during reset password:', err);
    next(err);
  }

});


router.post('/get_token', async (req, res, next) => {

  try {
    let UID = req.headers.uid;
    let token = req.headers.token;
    let {effective_time}=req.body;

    await validateToken(UID, token);
    
    const result = await query({
      sql: 'SELECT * FROM users WHERE UID = ?',
      values: [UID],
    });
    const results = JSON.parse(JSON.stringify(result));
    if (results.length === 0) {
      return res.status(401).json({ message: 'UID not found.' });
    }
    let user_token = jwt.sign({ UID: results[0].UID }, 'secret_key', { expiresIn: '1h' });
    redis.set(user_token, results[0].UID);
    redis.expire(user_token, effective_time);

    return res.json({ UID: results[0].UID, token: user_token });
  } catch (err) {
    return res.status(401).json({ message: err.message });
    console.error('Error during get token:', err);
    return next(err);
  }
});

module.exports = router;
