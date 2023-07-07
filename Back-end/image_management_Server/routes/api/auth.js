var express = require('express');
var router = express.Router();
const md5 = require('md5');
var db = require('../../lib/datasource/mysql_connection');  // 引用数据库连接

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
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res, next) => {
  try {
    const { usernameOrEmail, password } = req.body;
    console.log('Username or email:', usernameOrEmail);
    if (!usernameOrEmail) {
      return res.status(400).json({ message: 'Username or email is required.' });
    }
    const user = await db.query({
      sql: `
        SELECT 
            users.UID AS UID, 
            users.password AS password, 
            auth_info.allow_password_auth AS allow_password_auth, 
            banned_users.is_banned AS is_banned 
        FROM 
            users 
            LEFT JOIN banned_users ON users.UID = banned_users.UID 
            LEFT JOIN auth_info ON users.UID = auth_info.UID 
        WHERE 
            users.username = ? OR users.email = ?
      `,
      values: [usernameOrEmail, usernameOrEmail],
    });
    
    if (user.length === 0) {
      return res.status(401).json({ message: 'Invalid username or email.' });
    }
    const { UID, allow_password_auth, is_banned } = user[0] || {};
    if (!allow_password_auth) {
      return res.status(401).json({ message: 'Password authentication not allowed for this user.' });
    }
    if (is_banned) {
      return res.status(401).json({ message: 'This user is banned.' });
    }
    if (password !== user[0].password) {
      return res.status(401).json({ message: 'Invalid password.' });
    }
    const token = jwt.sign({ UID }, 'secret_key', { expiresIn: '1h' });
    return res.json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    next(err);
  }
});


module.exports = router;
