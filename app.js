var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// agrego FS //
const fs = require('fs')


var indexRouter = require('./routes/index');
var heroesRouter = require('./routes/heroes');
var creditosRouter = require('./routes/creditos');
var app = express();

app.use('/', indexRouter);
app.use('/heroes', heroesRouter);
app.use('/creditos', creditosRouter)


// Esto esta BIEN???//
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
module.exports = heroes


// view engine setup
app.set('views', path.join(__dirname, 'views')); //Aca dice que todas las vistas(html)vas a estar en el directorio views.
app.set('view engine', 'ejs'); //Aca dice que todas las vistas(html) van a ser EJS.

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



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