const db = require('../database');

class Categories {
  static create () {}

  static retrieveAll (callback) {
    db.query('SELECT * FROM categories', function (res) {
      callback(res ? res : []);
    });
  }

  static update () {}

  static delete () {}
}

module.exports = Categories;
