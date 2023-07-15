var express = require('express');
var router = express.Router();
var db = require('../lib/datasource/mysql_connection');  // 引用数据库连接

/* this is a demo page */

// GET /users
router.get('/', function(req, res, next) {
  res.send('API endpoint: GET /users');
});

// POST /users
router.post('/', function(req, res, next) {
  res.send('API endpoint: POST /users');
});

/***
 * 
 *  ! warning
 *  the next router will extend the previous router
 * so the url will be /users/select_test
 */
router.get('/select_test', function(req, res, next) {
  // 执行数据库查询
  db.query('SELECT * FROM test', function(err, results, fields) {
    if (err) throw err;
    console.log(results);
    res.json(results);
    console.log('The solution is: ', results.length, results[0].id);

  });
});

module.exports = router;
