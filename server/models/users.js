const db = require('../database');

class Users {
  static create () {}

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
