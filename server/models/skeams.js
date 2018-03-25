const db = require('../database');

class Skeams {
  static create (skeam, callback) {
    db.query(`SELECT insert_skeam($1, $2, $3, $4)`, [
      skeam.category,
      skeam.title, 
      skeam.description,
      skeam.access
    ], function (res) {
      callback(res ? res[0].insert_skeam : null);
    });
  }

  static retrieveById () {}

  static update () {}

  static delete () {}
}

module.exports = Skeams;
