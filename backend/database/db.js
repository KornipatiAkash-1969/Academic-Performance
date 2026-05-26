const sqlite3 = require('sqlite3').verbose();

const path = require('path');

// Absolute Database Path
const dbPath = path.join(
  __dirname,
  'student_performance.db'
);

console.log('Database Path:', dbPath);

const db = new sqlite3.Database(
  dbPath,
  (err) => {

    if (err) {

      console.error(
        'Database Error:',
        err.message
      );

    } else {

      console.log(
        'Connected to SQLite Database'
      );

    }

  }
);

module.exports = db;