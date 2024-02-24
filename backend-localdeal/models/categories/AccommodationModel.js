// models/categories/AccommodationModel.js
const mongoose = require("mongoose");

const accommodationSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  price: String,
  image: String,
  description: String,
  discount: String,
  rating: Number,
  facilities: [String],
  imagepath: String,
}, { timestamps: true }); // Adding timestamps option

const Accommodation = mongoose.model("Accommodation", accommodationSchema);

module.exports = Accommodation;
