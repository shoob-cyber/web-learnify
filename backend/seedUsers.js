require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

// Connect to DB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB for seeding...'))
  .catch(err => console.error('MongoDB connection error:', err));

// User data
const users = [
  {
    name: 'John Student',
    email: 'student@example.com',
    password: 'demo1234',
    role: 'student'
  },
  {
    name: 'Jane Teacher',
    email: 'teacher@example.com',
    password: 'teacher123',
    role: 'teacher'
  }
];

// Seed function
// seedUsers.js - Remove manual hashing since the User model handles it
const seedUsers = async () => {
  try {
    await User.deleteMany();
    console.log('Cleared existing users');

    // Create users directly - the User model will hash passwords
    await User.create(users);

    console.log('Successfully seeded users');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding users:', err);
    process.exit(1);
  }
};

// Run the seed
seedUsers();