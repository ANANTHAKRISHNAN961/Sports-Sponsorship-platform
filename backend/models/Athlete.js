const mongoose = require('mongoose');

const athleteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  achievements: [{ type: String }],
  posts: [{ type: String }],
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Athlete', athleteSchema);
