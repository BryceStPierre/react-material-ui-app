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

  static retrieveById (id, callback) {
    db.query(`SELECT * FROM skeams WHERE id = $1`, [id], function (res) {
      callback(res ? res[0] : null);
    });
  }

  static retrieveBySearch (query, callback) {
    const q = `%${query}%`;
    db.query(`SELECT * FROM skeams WHERE title LIKE $1`, [q], function (res) {
      callback(res ? res : null);
    });
  }

  static update () {}

  static delete () {}
}

module.exports = Skeams;
