const express =
require('express');

const router =
express.Router();

const {
  getStudents
} = require(
  '../controllers/studentController'
);


// GET STUDENTS

router.get(
  '/',
  getStudents
);

module.exports =
router;