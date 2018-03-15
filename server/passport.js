var passport = require('passport');
var Strategy = require('passport-local').Strategy;

var Users = require('./models/users');

passport.use(new Strategy(
  {usernameField: "email", passwordField: "password"},
  function(email, password, done) {
    Users.retrieveByEmail(email, function (user) {
      //if (err) { return done(err) }
      if (!user) { return done(null, false) }
      if (user.password != password) { return done(null, false); }
      return done(null, user);
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Users.retrieveById(id, function (user) {
    done(null, user);
  });
});

module.exports = passport;
