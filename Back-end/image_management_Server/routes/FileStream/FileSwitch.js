//通知功能
const express = require('express');
const router = express.Router();
const query = require('../../lib/datasource/mysql_connection_promise');  // 引用数据库连接
const redis = require('../../lib/datasource/redis_connection_promise');
import { validateInput_is_null_or_empty } from '../../lib/logic_module/checkBoolean';
const {validateToken} = require('../../lib/logic_module/check_user');
import {
    validate_authority_admin,
    validate_authority_root,
    validate_authority_modify,
    validate_authority_write,
    validate_authority_Read,
    validate_authority_IO,
} from '../../lib/logic_module/check_authority';


//list home file


module.exports = router;