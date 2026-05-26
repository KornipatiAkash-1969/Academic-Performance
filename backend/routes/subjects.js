const express =
require('express');

const router =
express.Router();

const authMiddleware =
require('../middleware/authMiddleware');

const {

  createSubject,
  getSubjects

} = require(
  '../controllers/subjectController'
);


// CREATE SUBJECT
router.post(
  '/',
  authMiddleware,
  createSubject
);


// GET SUBJECTS
router.get(
  '/',
  authMiddleware,
  getSubjects
);


module.exports =
router;