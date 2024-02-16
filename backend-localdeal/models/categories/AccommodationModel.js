// models/categories/AccommodationModel.js
const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  price: String,
  discount: String,
  image: String,
  description: String,
  facilities: [String],
  rating: Number,
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;
