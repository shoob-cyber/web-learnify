const express = require('express');
const { 
  getClasses, 
  getClass, 
  createClass, 
  updateClass, 
  deleteClass,
  addStudent,
  removeStudent
} = require('../controllers/classController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.get('/', getClasses);
router.get('/:id', getClass);
router.post('/', authorize('teacher', 'admin'), createClass);
router.put('/:id', authorize('teacher', 'admin'), updateClass);
router.delete('/:id', authorize('teacher', 'admin'), deleteClass);
router.put('/:id/add-student', authorize('teacher', 'admin'), addStudent);
router.put('/:id/remove-student', authorize('teacher', 'admin'), removeStudent);

module.exports = router;