// models/categories/ActivityModel.js
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  price: String,
  discount: String,
  image: String,
  description: String,
  participants: [String],
  rating: Number,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
