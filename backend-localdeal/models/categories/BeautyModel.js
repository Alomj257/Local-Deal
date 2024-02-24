// models/categories/BeautyModel.js
const mongoose = require("mongoose");

const beautySchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  price: String,
  image: String,
  description: String,
  discount: String,
  services: [String],
  rating: Number,
  imagepath: String,
}, { timestamps: true });

const Beauty = mongoose.model("Beauty", beautySchema);

module.exports = Beauty;
