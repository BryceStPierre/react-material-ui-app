var pg = require('pg');

class Database {
  
  // Initializes a pool of connections.
  constructor () {
    this._pool = new pg.Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'skeam',
      password: 'postgres',
      port: 5432,
      min: 4,
      max: 20
    });

    this._pool.on('error', (err, client) => {
      console.error('Unexpected error on Postgres client:', err);
      process.exit(-1);
    });
  }

  // Returns rows affect by the query, or null otherwise.
  query (query, ...args) {
    this._pool.connect((err, client, done) => {
      if (err) throw err;
      const params = args.length === 2 ? args[0] : [];
      const callback = args.length === 1 ? args[0] : args[1];

      client.query(query, params, (err, res) => {
        done();
        if (err)
          console.log(err.stack);
        else
          callback(res.rows.length > 0 ? res.rows : null);
      });
    });
  }

  // Terminates the connection pool.
  end () {
    this._pool.end();
  }
}

module.exports = new Database();
