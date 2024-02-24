// models/categories/FoodModel.js
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  price: String,
  image: String,
  description: String,
  discount: String,
  rating: Number,
  imagepath: String,
}, { timestamps: true });

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
