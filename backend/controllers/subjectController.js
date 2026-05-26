const db =
require('../database/db');


// ======================================
// GENERATE SUBJECT ID
// EXAMPLE:
// MAT583
// JAV291
// DBM804
// ======================================

const generateSubjectId =
(subjectName) => {

  // GET PREFIX

  const prefix =
    subjectName
      .replace(/\s+/g, '')
      .substring(0, 3)
      .toUpperCase();

  // RANDOM NUMBER

  const random =
    Math.floor(

      100 + Math.random() * 900

    );

  return `${prefix}${random}`;

};


// ======================================
// CREATE SUBJECT
// ======================================

exports.createSubject =
(req, res) => {

  const {

    subject_name,
    semester

  } = req.body;

  // VALIDATION

  if (

    !subject_name ||
    !semester

  ) {

    return res.status(400).json({

      success: false,

      message:
      'All fields are required'

    });

  }

  // GENERATE SUBJECT ID

  const subjectId =
    generateSubjectId(
      subject_name
    );

  // CHECK EXISTING SUBJECT

  db.get(

    `
    SELECT * FROM subjects
    WHERE subject_name = ?
    `,

    [subject_name],

    (err, existingSubject) => {

      if (err) {

        console.log(err);

        return res.status(500).json({

          success: false,

          message:
          err.message

        });

      }

      // SUBJECT EXISTS

      if (existingSubject) {

        return res.status(400).json({

          success: false,

          message:
          'Subject already exists'

        });

      }

      // INSERT SUBJECT

      db.run(

        `
        INSERT INTO subjects (

          subject_id,
          subject_name,
          semester

        )

        VALUES (?, ?, ?)
        `,

        [

          subjectId,
          subject_name,
          semester

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
            'Subject Created Successfully',

            subject: {

              id:
              this.lastID,

              subject_id:
              subjectId,

              subject_name:
              subject_name,

              semester:
              semester

            }

          });

        }

      );

    }

  );

};


// ======================================
// GET ALL SUBJECTS
// ======================================

exports.getSubjects =
(req, res) => {

  db.all(

    `
    SELECT * FROM subjects
    ORDER BY id DESC
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

        count:
        rows.length,

        subjects:
        rows

      });

    }

  );

};


// ======================================
// EXPORTS
// ======================================

module.exports = {

  createSubject:
  exports.createSubject,

  getSubjects:
  exports.getSubjects

};