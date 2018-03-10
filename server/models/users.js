const db = require('../database');

class Users {

  findByEmail (email) {
    db.query(`SELECT * FROM users WHERE email = ${email}`, function (err, res) {
      //if (err) callback(err, null);
      console.log(err, res);
    });
  }

}

module.exports = new Users();
