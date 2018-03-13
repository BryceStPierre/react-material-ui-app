var passport = require('passport');
var Strategy = require('passport-local').Strategy;

var Users = require('./models/users');

passport.use(new Strategy(
  {usernameField: "email", passwordField: "password"},
  function(email, password, cb) {
    Users.retrieveByEmail(email, function (user) {
      //if (err) { return cb(err) }
      if (!user) { return cb(null, false) }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  Users.retrieveById(id, function (user) {
    cb(null, user);
  });
});

module.exports = passport;
