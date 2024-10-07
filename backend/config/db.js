const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/your_database')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;
