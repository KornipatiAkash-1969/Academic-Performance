const db = require('../database/db');

exports.getDashboardSummary = (req, res) => {
  const summary = {};

  db.get(
    "SELECT COUNT(*) as totalStudents FROM users WHERE role='student'",
    [],
    (err, studentData) => {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      summary.totalStudents = studentData.totalStudents;

      db.get(
        "SELECT COUNT(*) as totalSubjects FROM subjects",
        [],
        (err, subjectData) => {
          if (err) {
            return res.status(500).json({
              error: err.message
            });
          }

          summary.totalSubjects = subjectData.totalSubjects;

          db.get(
            "SELECT AVG(percentage) as averageMarks FROM marks",
            [],
            (err, marksData) => {
              if (err) {
                return res.status(500).json({
                  error: err.message
                });
              }

              summary.averageMarks = marksData.averageMarks || 0;

              db.get(
                "SELECT MAX(percentage) as highestPercentage FROM marks",
                [],
                (err, topperData) => {
                  if (err) {
                    return res.status(500).json({
                      error: err.message
                    });
                  }

                  summary.highestPercentage =
                    topperData.highestPercentage || 0;

                  res.json({
                    success: true,
                    data: summary
                  });
                }
              );
            }
          );
        }
      );
    }
  );
};