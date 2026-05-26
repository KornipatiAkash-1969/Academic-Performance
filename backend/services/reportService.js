const db = require('../database/db');

exports.getStudentReport = (studentId) => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT 
        subjects.subject_name,
        marks.marks_obtained,
        marks.grade
      FROM marks
      JOIN subjects
      ON marks.subject_id = subjects.id
      WHERE student_id=?`,
      [studentId],
      (err, rows) => {
        if (err) {
          reject(err);
        }

        resolve(rows);
      }
    );
  });
};