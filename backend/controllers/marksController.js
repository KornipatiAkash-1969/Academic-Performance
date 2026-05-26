const db =
require('../database/db');

const calculateGrade =
require('../services/gradeService');


// ======================================
// ADD MARKS
// ======================================

const addMarks =
(req, res) => {

  const {

    student_id,
    subject_id,
    assessment_id,
    marks_obtained

  } = req.body;

  // VALIDATION

  if (

    !student_id ||
    !subject_id ||
    !assessment_id ||
    marks_obtained === ''

  ) {

    return res.status(400).json({

      success: false,

      message:
      'All fields are required'

    });

  }

  // PERCENTAGE

  const percentage =
    Number(marks_obtained);

  // GRADE

  const grade =
    calculateGrade(
      percentage
    );

  // INSERT MARKS

  db.run(

    `
    INSERT INTO marks (

      student_id,
      subject_id,
      assessment_id,
      marks_obtained,
      percentage,
      grade

    )

    VALUES (?, ?, ?, ?, ?, ?)
    `,

    [

      student_id,
      subject_id,
      assessment_id,
      marks_obtained,
      percentage,
      grade

    ],

    function(err) {

      if (err) {

        console.log(err);

        return res.status(500).json({

          success: false,

          message:
          err.message

        });

      }

      return res.status(201).json({

        success: true,

        message:
        'Marks Added Successfully'

      });

    }

  );

};


// ======================================
// GET ALL MARKS
// ======================================

const getMarks =
(req, res) => {

  db.all(

    `
    SELECT

      marks.id,

      marks.student_id,

      marks.subject_id,

      marks.assessment_id,

      marks.marks_obtained,

      marks.percentage,

      marks.grade,

      subjects.subject_name,

      assessments.title
      AS assessment_title

    FROM marks

    LEFT JOIN subjects
    ON marks.subject_id =
    subjects.subject_id

    LEFT JOIN assessments
    ON marks.assessment_id =
    assessments.assessment_id

    ORDER BY marks.id DESC
    `,

    [],

    (err, rows) => {

      if (err) {

        console.log(err);

        return res.status(500).json({

          success: false,

          message:
          err.message

        });

      }

      return res.status(200).json({

        success: true,

        marks:
        rows

      });

    }

  );

};


// ======================================
// GET STUDENT MARKS
// ======================================

const getStudentMarks =
(req, res) => {

  console.log(
    'Logged User:',
    req.user
  );

  // SUPPORT BOTH IDS

  const studentTextId =

    req.user.student_id;

  const studentNumericId =

    String(req.user.id);

  db.all(

    `
    SELECT

      marks.id,

      marks.student_id,

      marks.subject_id,

      marks.assessment_id,

      marks.marks_obtained,

      marks.percentage,

      marks.grade,

      subjects.subject_name,

      assessments.title
      AS assessment_title

    FROM marks

    LEFT JOIN subjects
    ON marks.subject_id =
    subjects.subject_id

    LEFT JOIN assessments
    ON marks.assessment_id =
    assessments.assessment_id

    WHERE

      marks.student_id = ?

      OR

      marks.student_id = ?

    ORDER BY marks.id DESC
    `,

    [

      studentTextId,
      studentNumericId

    ],

    (err, rows) => {

      if (err) {

        console.log(err);

        return res.status(500).json({

          success: false,

          message:
          err.message

        });

      }

      console.log(
        'Student Marks:',
        rows
      );

      return res.status(200).json({

        success: true,

        marks:
        rows

      });

    }

  );

};


// ======================================
// DELETE MARK
// ======================================

const deleteMark =
(req, res) => {

  const {
    id
  } = req.params;

  db.run(

    `
    DELETE FROM marks
    WHERE id = ?
    `,

    [id],

    function(err) {

      if (err) {

        console.log(err);

        return res.status(500).json({

          success: false,

          message:
          err.message

        });

      }

      return res.status(200).json({

        success: true,

        message:
        'Mark Deleted Successfully'

      });

    }

  );

};


// ======================================
// EXPORTS
// ======================================

module.exports = {

  addMarks,
  getMarks,
  getStudentMarks,
  deleteMark

};