const express = require('express');
const router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
// const redis=require('../../lib/datasource/redis_connection');
const redis=require('../../lib/datasource/redis_connection_promise');

/* user auth */

//post /api/auth/signup
// 接收 POST 请求中传递的用户信息。
// 对用户信息进行验证，确保用户名和邮箱没有被使用过，密码符合要求。
// 将用户信息保存到数据库中。
// 返回一个包含用户信息和 token 的 JSON 响应。
router.post('/signup', async (req, res, next) => {
  const { full_name, username, password, email } = req.body;
  try {
    // Check if username is present in the request body
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }

    // 验证用户名和邮箱是否已被使用
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
    });

    // 返回注册成功的用户信息
    res.json({
      // @ts-ignore
      UID: insertUserResult.insertId,
      full_name,
      username,
      email
    });
  } catch (error) {
    // 输出错误信息
    console.error('Error during signup:', error);
    next(error);
  }
});

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
        users.UID,users.username, users.email, users.password, auth_info.allow_password_auth, banned_users.is_banned
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
    } else {
      //redis get uid if not null
      let token = jwt.sign({ UID: results[0].UID }, 'secret_key', { expiresIn: '1h' });
      redis.set(token, results[0].UID);
      redis.expire(token, 3600);

      return res.json({ UID: results[0].UID, token: token });
    }
  } catch (err) {
    console.error('Error during login:', err);
    next(err);
  }

});

router.post('/change_password', async (req, res, next) => {
  try {
    let UID;
    const { token } = req.headers;
    redis.get(token).then((result) => {
      if (result == null) {
        return res.status(401).json({ message: 'Token is invalid.' });
      } else {
        UID = result;
      }
    }).catch((err) => {
      console.log(err);
    });

    const { old_password, new_password } = req.body;
    const result = await query({
      sql: 'SELECT * FROM users WHERE UID = ?',
      values: [UID],
    });
    const results = JSON.parse(JSON.stringify(result));
    if (results[0].password !== md5(old_password)) {
      return res.status(401).json({ message: 'Old password is incorrect.' });
    }
    const updateResult = await query({
      sql: 'UPDATE users SET password = ? WHERE UID = ?',
      values: [md5(new_password), UID],
    });
    return res.json({ message: 'Password changed successfully.' });

  } catch (err) {
    console.error('Error during change password:', err);
    next(err);
  }
});

router.post('/reset_password', async (req, res, next) => {
  //
  try {
    const { email } = req.body;
    const result = await query({
      sql: 'SELECT * FROM users WHERE email = ?',
      values: [email],
    });
    const results = JSON.parse(JSON.stringify(result));
    if (results.length === 0) {
      return res.status(401).json({ message: 'Email not found.' });
    }
    const updateResult = await query({
      sql: 'UPDATE users SET password = ? WHERE email = ?',
      values: [md5('123456'), email],
    });
    return res.json({ message: 'Password reset successfully.' });

  } catch (err) {
    console.error('Error during reset password:', err);
    next(err);
  }

});


module.exports = router;
