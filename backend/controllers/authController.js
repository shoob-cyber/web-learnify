const User = require("../models/User");
const Class = require("../models/Class");
const generateToken = require("../utils/generateToken");
const asyncHandler = require("express-async-handler");

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password, role, classCode } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  // If student is registering with a class code
  if (role === "student" && classCode) {
    const classObj = await Class.findOne({ code: classCode.trim() });
    if (!classObj) {
      res.status(400);
      throw new Error("Invalid class code");
    }

    // Add student to class
    classObj.students.push(user._id);
    await classObj.save();

    // Add class to student
    user.classes.push(classObj._id);
    await user.save();
  }

  // Create token
  const token = generateToken(user._id, user.role);

  res.status(201).json({
    success: true,
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      classes: user.classes,
    },
  });
});
exports.login = asyncHandler(async (req, res) => {
  const { email, password, classCode } = req.body;

  // Validate input
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }

  // Check for user with password field
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // Verify password
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  // Handle class code for students
  if (user.role === "student" && classCode) {
    const classObj = await Class.findOne({ code: classCode.trim() });
    if (!classObj) {
      res.status(400);
      throw new Error("Invalid class code");
    }

    // Add student to class if not already added
    if (!classObj.students.includes(user._id)) {
      classObj.students.push(user._id);
      await classObj.save();
    }

    // Add class to student if not already added
    if (!user.classes.includes(classObj._id)) {
      user.classes.push(classObj._id);
      await user.save();
    }
  }

  // Create token
  const token = generateToken(user._id, user.role);

  res.status(200).json({
    success: true,
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      classes: user.classes,
    },
    message: "Login successful",
  });
});
exports.getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).populate("classes");

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc    Test password match (for debugging)
// @route   POST /api/auth/test-password
// @access  Public
exports.testPassword = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const isMatch = await user.matchPassword(password);
  res.json({ match: isMatch });
});