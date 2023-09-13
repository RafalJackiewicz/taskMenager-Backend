const { createPool } = require('mysql2/promise');

// create the connection to database
const pool = createPool({
  host: 'localhost',
  user: 'root',
  database: 'task_menager',
  decimalNumbers: true,
  namedPlaceholders: true,
});

module.exports = {
  pool,
};
