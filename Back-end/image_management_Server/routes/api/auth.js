// @ts-nocheck
var express = require('express');
var router = express.Router();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
var db = require('../../lib/datasource/mysql_connection');  // 引用数据库连接
var redis = require('../../lib/datasource/redis_connection');  // 引用redis连接
/* user auth */

//post /api/auth/signup
// 接收 POST 请求中传递的用户信息。
// 对用户信息进行验证，确保用户名和邮箱没有被使用过，密码符合要求。
// 将用户信息保存到数据库中。
// 返回一个包含用户信息和 token 的 JSON 响应。
router.post('/signup', async (req, res, next) => {
  const { full_name, username, password, email } = req.body;

  try {
    // 验证用户名和邮箱是否已被使用
    const checkUserQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
    const checkUserResult = await db.query(checkUserQuery, [username, email]);
    // @ts-ignore
    if (checkUserResult.length > 0) {
      console.log('Username or email already in use:', username, email);
      return res.status(400).json({ message: 'Username or email already in use' });
    }

    // 将用户信息插入数据库
    const insertUserQuery = 'INSERT INTO users (full_name, username, password, email) VALUES (?, ?, ?, ?)';
    const insertUserResult = await db.query(insertUserQuery, [full_name, username, password, email]);

    // 输出调试信息
    console.log('User registered successfully:', insertUserResult);

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

// @ts-ignore

router.post('/login', async (req, res, next) => {
  let results;
  try {
    const { usernameOrEmail, password } = req.body;
    console.log('Username or email:', usernameOrEmail);
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
      //check data if not exist ?
      const token = jwt.sign({ UID: results[0].UID }, 'secret_key', { expiresIn: '1h' });
      //uplodad token to redis
      redis.set(results[0].UID, token);
      
      return res.json({ token });
    }
  } catch (err) {
    console.error('Error during login:', err);
    next(err);
  }

  function query(sql, values) {
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(JSON.stringify(results)));
        }
      });
    });
  }
});



module.exports = router;
