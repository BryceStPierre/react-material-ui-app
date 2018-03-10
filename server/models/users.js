const db = require('../database');

class Users {

  //
  static findByEmail (email, callback) {
    db.query(`SELECT * FROM users WHERE email=$1`, [email], function (res) {
      //if (err) callback(err, null);
      if (res) callback(res);
    });
  }

  static create () {}

  static update () {}

  static delete () {}
}

module.exports = Users;
