const express = require('express');

const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const {
  getStudentReport
} = require('../controllers/reportController');

router.get(
  '/students/:id',
  authMiddleware,
  getStudentReport
);

module.exports = router;