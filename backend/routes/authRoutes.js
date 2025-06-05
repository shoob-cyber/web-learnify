const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { testPassword } = require('../controllers/authController'); // Import the testPassword function
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

// And add this to your authRoutes.js
router.post('/test-password', testPassword);
module.exports = router;