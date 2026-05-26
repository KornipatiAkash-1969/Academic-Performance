const express = require('express');

const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const {
  createAssessment,
  getAssessments
} = require('../controllers/assessmentController');

router.post('/', authMiddleware, createAssessment);

router.get('/', authMiddleware, getAssessments);

module.exports = router;