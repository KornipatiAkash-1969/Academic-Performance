const express =
require('express');

const router =
express.Router();

const protect =
require('../middleware/authMiddleware');

const marksController =
require('../controllers/marksController');


// ======================================
// ADD MARKS
// ======================================

router.post(
  '/',
  protect,
  marksController.addMarks
);


// ======================================
// GET ALL MARKS
// ======================================

router.get(
  '/',
  protect,
  marksController.getMarks
);


// ======================================
// GET STUDENT MARKS
// ======================================

router.get(
  '/student',
  protect,
  marksController.getStudentMarks
);


// ======================================
// DELETE MARK
// ======================================

router.delete(
  '/:id',
  protect,
  marksController.deleteMark
);

module.exports =
router;