const mongoose = require('mongoose');

// Schema for achievements
const achievementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }], // Array of image URLs
    videos: [{ type: String }], // Array of video URLs
    dateAchieved: { type: Date, required: true },
});

// Schema for posts
const postSchema = new mongoose.Schema({
    content: { type: String, required: true }, // Text content of the post
    images: [{ type: String }], // Array of image URLs
    videos: [{ type: String }], // Array of video URLs
    datePosted: { type: Date, default: Date.now },
});

const athleteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    achievements: [achievementSchema], // Array of achievements (embedded)
    posts: [postSchema], // Array of posts (embedded)
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('Athlete', athleteSchema);
