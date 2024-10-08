const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/sportsDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
