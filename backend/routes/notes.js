const express =
require('express');

const router =
express.Router();

const authMiddleware =
require('../middleware/authMiddleware');

const {
  createNote,
  getNotes
} = require(
  '../controllers/noteController'
);


// Create Note
router.post(
  '/',
  authMiddleware,
  createNote
);


// Get Notes
router.get(
  '/',
  authMiddleware,
  getNotes
);


module.exports =
router;