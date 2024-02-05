// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  image: String,
  category: String,
  icon: String,
  title: String,
  description: String,
  date: String,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
