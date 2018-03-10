const db = require('../database');

class Users {
  static create () {}

  static retrieve (email, callback) {
    db.query(`SELECT * FROM users WHERE email=$1`, [email], function (res) {
      callback(res ? res[0] : null);
    });
  }

  static update () {}

  static delete () {}
}

module.exports = Users;
