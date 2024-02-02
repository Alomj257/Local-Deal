// models/categories/ActivityModel.js
const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  date: Date,
  duration: String,
  description: String,
  participants: [String],
  image: String,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
