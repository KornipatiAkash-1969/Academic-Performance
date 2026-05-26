const { body } = require('express-validator');

exports.subjectValidation = [
  body('subject_name')
    .notEmpty()
    .withMessage('Subject name required'),

  body('semester')
    .isInt()
    .withMessage('Semester must be integer')
];