"use strict";

var http = require("http");

var express = require("express");

var ejs = require('ejs');

var Cadastrese_Controller = require("./controllers/Cadastrese_Controller");

var path = require('path');

var logger = require('morgan');

var createError = require('http-errors');

var cookieParser = require('cookie-parser');

var routes = require('./routes');

var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public'))); // rotas

app.use(routes); // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
// error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
app.listen(8080);
module.exports = app;