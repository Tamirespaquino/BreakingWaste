const http = require("http");
const express = require("express");
const Cadastrese_Controller = require("./controllers/Cadastrese_Controller");

http.createServer(express).listen(3000, () => console.log("Servidor rodando local na porta 3000"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

// rotas
app.use('/cadastrese', cadastrese);
app.use('/contato', contato);
app.use('/entre', entre);
app.use('/home', home);
app.use('/perfilusuario', perfilusuario);
app.use('/quemsomos', quemsomos);
app.use('/residuos', residuos);
app.use('/resultadobusca', resultadobusca);



module.exports = app;



