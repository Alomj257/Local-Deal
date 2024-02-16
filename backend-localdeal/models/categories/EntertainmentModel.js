// models/categories/EntertainmentModel.js
const mongoose = require('mongoose');

const entertainmentSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  type: String,
  description: String,
  price: String,
  schedule: String,
  image: String,
  rating: Number,
});

const Entertainment = mongoose.model('Entertainment', entertainmentSchema);

module.exports = Entertainment;
