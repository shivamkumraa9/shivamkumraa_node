const mongoose = require('mongoose');

const Blog = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Blog', Blog);
