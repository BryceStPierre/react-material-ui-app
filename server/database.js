var pg = require('pg');

module.exports = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'skeam',
  password: 'postgres',
  port: 5432,
  max: 10
});