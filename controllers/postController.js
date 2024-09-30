const Post = require('../models/Post');
const User = require('../models/User');

// Create a Post
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({
      athlete: req.user.id,
      content: req.body.content,
    });
    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// Get All Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('athlete', 'name');
    res.json(posts);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
