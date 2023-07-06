var express = require('express');
var router = express.Router();
// @ts-ignore
const md5 = require('md5');
var db = require('../../lib/datasource/mysql_connection');  // 引用数据库连接

/* user auth */

//post /api/auth/signup
// 接收 POST 请求中传递的用户信息。
// 对用户信息进行验证，确保用户名和邮箱没有被使用过，密码符合要求。
// 将用户信息保存到数据库中。
// 返回一个包含用户信息和 token 的 JSON 响应。
/**
 * Result of the query to check if the username or email is already in use.
 * @typedef {Object[]} CheckUserResult
 * @property {number} id - The user's ID.
 * @property {string} full_name - The user's full name.
 * @property {string} username - The user's username.
 * @property {string} password - The user's password.
 * @property {string} email - The user's email.
 */
router.post('/signup', async (req, res, next) => {
    const { full_name, username, password, email } = req.body;
    
    try {
      // 验证用户名和邮箱是否已被使用
      const checkUserQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
      // @ts-ignore
      const [checkUserResult] = await db.query(checkUserQuery, [username, email]);
      if (checkUserResult.length > 0) {
        return res.status(400).json({ message: 'Username or email already in use' });
      }
            
      // 将用户信息插入数据库
      const insertUserQuery = 'INSERT INTO users (full_name, username, password, email) VALUES (?, ?, ?, ?)';
      // @ts-ignore
      const [insertUserResult] = await db.query(insertUserQuery, [full_name, username, password, email]);
      
      // return info
      res.json({
        UID: insertUserResult.insertId,
        full_name,
        username,
        email
      });
    } catch (error) {
      next(error);
    }
  });




module.exports = router;
