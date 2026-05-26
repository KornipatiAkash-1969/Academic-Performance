const db = require('../database/db');

exports.getDashboardAnalytics = () => {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT AVG(percentage) as averageMarks FROM marks',
      [],
      (err, rows) => {
        if (err) {
          reject(err);
        }

        resolve(rows);
      }
    );
  });
};