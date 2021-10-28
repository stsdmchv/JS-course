let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
const infoRouter = require('./routes/info');
const updateRouter = require('./routes/update');
const empsRouter = require('./routes/emps')

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/info', infoRouter);
app.use('/update', updateRouter);
app.use('/emps', empsRouter);

module.exports = app;