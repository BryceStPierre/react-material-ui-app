const db = require('../database');

class Users {
  static create (user, callback) {
    db.query(`SELECT insert_user($1, $2, $3)`, [
      user.email, 
      user.displayName, 
      user.password
    ], function (res) {
      callback(res ? res[0].insert_user : null);
    });
  }

  static retrieveByEmail (email, callback) {
    db.query(`SELECT * FROM users WHERE email=$1`, [email], function (res) {
      callback(res ? res[0] : null);
    });
  }

  static retrieveById (id, callback) {
    db.query(`SELECT * FROM users WHERE id=$1`, [id], function (res) {
      callback(res ? res[0] : null);
    });
  }

  static update () {}

  static delete () {}
}

module.exports = Users;
