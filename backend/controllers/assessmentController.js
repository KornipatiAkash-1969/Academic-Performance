const db = require('../database/db');

exports.createAssessment = (req, res) => {
  const { assessment_type, total_marks } = req.body;

  db.run(
    'INSERT INTO assessments(assessment_type,total_marks) VALUES(?,?)',
    [assessment_type, total_marks],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.status(201).json({
        success: true,
        assessmentId: this.lastID
      });
    }
  );
};

exports.getAssessments = (req, res) => {
  db.all('SELECT * FROM assessments', [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json(rows);
  });
};