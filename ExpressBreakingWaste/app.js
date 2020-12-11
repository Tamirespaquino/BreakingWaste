const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const Cadastrese_Controller = require("./controllers/Cadastrese_Controller");
const path = require('path');
const logger = require('morgan');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const session = require('express-session');

const sessionConfig = {
  secret: 'VnOI7vPW$13K*R8Gj5UW',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('trust proxy', 1);
app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

// rotas
app.use(routes)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080)

module.exports = app;


