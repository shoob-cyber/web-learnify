const Class = require('../models/Class');
const User = require('../models/User');

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private
exports.getClasses = async (req, res, next) => {
  try {
    let query;
    
    if (req.user.role === 'teacher') {
      query = Class.find({ teacher: req.user.id }).populate('students');
    } else if (req.user.role === 'student') {
      query = Class.find({ students: req.user.id }).populate('teacher');
    } else {
      // Admin can see all classes
      query = Class.find().populate('teacher students');
    }
    
    const classes = await query;
    
    res.status(200).json({
      success: true,
      count: classes.length,
      data: classes
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single class
// @route   GET /api/classes/:id
// @access  Private
exports.getClass = async (req, res, next) => {
  try {
    const classObj = await Class.findById(req.params.id)
      .populate('teacher')
      .populate('students');
      
    if (!classObj) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    
    // Check if user has access to this class
    if (
      req.user.role !== 'admin' && 
      classObj.teacher._id.toString() !== req.user.id && 
      !classObj.students.some(student => student._id.toString() === req.user.id)
    ) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this class'
      });
    }
    
    res.status(200).json({
      success: true,
      data: classObj
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create class
// @route   POST /api/classes
// @access  Private/Teacher
exports.createClass = async (req, res, next) => {
  try {
    if (req.user.role !== 'teacher' && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Only teachers can create classes'
      });
    }
    
    req.body.teacher = req.user.id;
    const classObj = await Class.create(req.body);
    
    // Add class to teacher's classes
    await User.findByIdAndUpdate(req.user.id, {
      $push: { classes: classObj._id }
    });
    
    res.status(201).json({
      success: true,
      data: classObj
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update class
// @route   PUT /api/classes/:id
// @access  Private/Teacher
exports.updateClass = async (req, res, next) => {
  try {
    let classObj = await Class.findById(req.params.id);
    
    if (!classObj) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    
    // Make sure user is teacher of the class or admin
    if (classObj.teacher.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to update this class'
      });
    }
    
    classObj = await Class.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      success: true,
      data: classObj
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete class
// @route   DELETE /api/classes/:id
// @access  Private/Teacher
exports.deleteClass = async (req, res, next) => {
  try {
    const classObj = await Class.findById(req.params.id);
    
    if (!classObj) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    
    // Make sure user is teacher of the class or admin
    if (classObj.teacher.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this class'
      });
    }
    
    await classObj.remove();
    
    // Remove class from teacher's classes
    await User.findByIdAndUpdate(classObj.teacher, {
      $pull: { classes: classObj._id }
    });
    
    // Remove class from all students' classes
    await User.updateMany(
      { _id: { $in: classObj.students } },
      { $pull: { classes: classObj._id } }
    );
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Add student to class
// @route   PUT /api/classes/:id/add-student
// @access  Private/Teacher
exports.addStudent = async (req, res, next) => {
  try {
    const classObj = await Class.findById(req.params.id);
    const { studentId } = req.body;
    
    if (!classObj) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    
    // Make sure user is teacher of the class or admin
    if (classObj.teacher.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to modify this class'
      });
    }
    
    // Check if student exists
    const student = await User.findById(studentId);
    if (!student || student.role !== 'student') {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    
    // Check if student is already in the class
    if (classObj.students.includes(studentId)) {
      return res.status(400).json({
        success: false,
        message: 'Student is already in this class'
      });
    }
    
    // Add student to class
    classObj.students.push(studentId);
    await classObj.save();
    
    // Add class to student's classes
    student.classes.push(classObj._id);
    await student.save();
    
    res.status(200).json({
      success: true,
      data: classObj
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Remove student from class
// @route   PUT /api/classes/:id/remove-student
// @access  Private/Teacher
exports.removeStudent = async (req, res, next) => {
  try {
    const classObj = await Class.findById(req.params.id);
    const { studentId } = req.body;
    
    if (!classObj) {
      return res.status(404).json({
        success: false,
        message: 'Class not found'
      });
    }
    
    // Make sure user is teacher of the class or admin
    if (classObj.teacher.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to modify this class'
      });
    }
    
    // Check if student is in the class
    if (!classObj.students.includes(studentId)) {
      return res.status(400).json({
        success: false,
        message: 'Student is not in this class'
      });
    }
    
    // Remove student from class
    classObj.students = classObj.students.filter(id => id.toString() !== studentId);
    await classObj.save();
    
    // Remove class from student's classes
    await User.findByIdAndUpdate(studentId, {
      $pull: { classes: classObj._id }
    });
    
    res.status(200).json({
      success: true,
      data: classObj
    });
  } catch (err) {
    next(err);
  }
};