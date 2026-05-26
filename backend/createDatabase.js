const sqlite3 = require('sqlite3').verbose();

const fs = require('fs');

const path = require('path');

// Correct DB Path
const dbPath = path.join(
  __dirname,
  'database',
  'student_performance.db'
);

console.log('Creating DB:', dbPath);

// Read Schema
const schema = fs.readFileSync(
  path.join(
    __dirname,
    'database',
    'schema.sql'
  ),
  'utf8'
);

// Read Seed
const seed = fs.readFileSync(
  path.join(
    __dirname,
    'database',
    'seed.sql'
  ),
  'utf8'
);

// Create DB
const db = new sqlite3.Database(
  dbPath,
  (err) => {

    if (err) {
      console.log(err.message);
    } else {
      console.log(
        'Connected to SQLite Database'
      );
    }

  }
);

// Execute Schema
db.exec(schema, (err) => {

  if (err) {

    console.log(
      'Schema Error:',
      err.message
    );

    return;
  }

  console.log(
    'Tables Created Successfully'
  );

  // Seed Data
  db.exec(seed, (err) => {

    if (err) {

      console.log(
        'Seed Error:',
        err.message
      );

      return;
    }

    console.log(
      'Seed Data Inserted Successfully'
    );

    db.close();

  });

});