var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {generateKeyPair} = require('./lib/hash/rsa_pwd');
//require the users.js file in the API server
var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');
var authRouter = require('./routes/api/auth');
var user_info_Router = require('./routes/api/user_info');
var host_info_Router = require('./routes/api/host');
var file_stream_router = require('./routes/FileStream/LocalFile');

var app = express();
const { publicKey, privateKey } = generateKeyPair();
global.keyPair = { publicKey, privateKey };
// console.log(publicKey+'\n'+privateKey+'\n');
// view engine setup
const publicPath = './File_Stream/File_Block';
global.publicPath = publicPath;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/**
 * this is the middleware that will be executed for every request to the app
 */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', user_info_Router);
app.use('/api/host', host_info_Router);
app.use('/api/file', file_stream_router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // allow any address to access the API
  res.header('Access-Control-Allow-Origin', '*');
  // allow any header to access the API
  res.header('Access-Control-Allow-Headers', '*');
  // allow any method to access the API
  res.header('Access-Control-Allow-Methods', '*');

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
