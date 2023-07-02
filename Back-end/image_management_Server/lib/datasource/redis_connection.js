import Redis from 'ioredis';

// 创建 Redis 连接实例
const redis = new Redis({
  host: '192.168.101.1',
  port: 6379,
  password: '',
});

// 导出 Redis 连接对象
export default redis;

/*                       *
 *        Useage:        *
 *                       */

// // import redis from
// const redis = require('../lib/datasource/mysql_connection'); 

// redis.set('key', 'value');
// redis.get('key', function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });
