const {compareArrays} = require('../../../lib/logic_module/Mathematical_logic');

let dependencies1 = ["bcrypt", "cookie-parser", "debug", "express", "http-errors", "ioredis", "jade", "jsencrypt", "jsonwebtoken", "lodash", "md5", "morgan", "multer", "mysql", "node-gyp", "node-rsa", "redis", "systeminformation", "uuidv4"];
let dependencies2 = ["bcrypt", "cookie-parser", "debug", "express", "http-errors", "ioredis", "jade", "jsonwebtoken", "lodash", "md5", "morgan", "multer", "mysql", "node-gyp", "node-rsa", "redis", "systeminformation", "uuidv4", "new-dependency"];

let result = compareArrays(dependencies1, dependencies2);

console.log("Same dependencies: ", result.same);
console.log("Different dependencies: ", result.diff);