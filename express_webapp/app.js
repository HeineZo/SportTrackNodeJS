const createError = require('http-errors');
const express = require('express');
const multer  = require('multer')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const users = require('./routes/users');
const connect = require('./routes/connect');
const upload = require('./routes/upload');
const valid = require('./routes/valid');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'fd34s@!@dfa453f3DF#$D&W',
  resave: false,
  saveUninitialized: false,
}));
app.dynamicHelpers({
  session: function (req, res) {
    return req.session;
  }
});

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/users', users);
app.use('/connect', connect);
app.use('/upload', upload);
app.use('/valid', valid);
app.use(fileupload());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
