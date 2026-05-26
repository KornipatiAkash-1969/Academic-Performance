const { body } = require('express-validator');

exports.marksValidation = [
  body('student_id')
    .notEmpty()
    .withMessage('Student ID required'),

  body('subject_id')
    .notEmpty()
    .withMessage('Subject ID required'),

  body('assessment_id')
    .notEmpty()
    .withMessage('Assessment ID required'),

  body('marks_obtained')
    .isInt({ min: 0, max: 100 })
    .withMessage('Marks must be between 0 and 100')
];