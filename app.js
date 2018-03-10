var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//var index = require('./routes/index');
var users = require('./routes/users');
var signin = require('./routes/signin');

/*passport.use(new LocalStrategy(
  function(username, password, callback) {

}));*/

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/users', users);
app.use('/api/signin', signin);

var db = require('./server/database');

db.query('SELECT NOW()', (err, res) => {
  console.log(`PostgreSQL connected: ${res.rows[0].now}.`);
  db.end();
});

app.listen(3001, () => {
  console.log(`Server running on port 3001...`);
});
