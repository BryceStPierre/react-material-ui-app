var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//var index = require('./routes/index');
var users = require('./server/routes/users');
var signin = require('./server/routes/signin');

// passport.use(new LocalStrategy(
//   function(username, password, callback) {
// }));

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//app.use('/', index);
app.use('/users', users);
app.use('/api/signin', signin);

var db = require('./server/database');

db.query('SELECT NOW()', (res) => {
  console.log(`PostgreSQL connected: ${res[0].now}.`);
});

app.listen(3001, () => {
  console.log(`Server running on port 3001...`);
});
