// models/categories/ActivityModel.js
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  price: String,
  image: String,
  description: String,
  discount: String,
  rating: Number,
  participants: [String],
  imagepath: String,
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
