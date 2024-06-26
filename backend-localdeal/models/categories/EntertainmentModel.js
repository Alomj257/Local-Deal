// models/categories/EntertainmentModel.js
const mongoose = require("mongoose");

const entertainmentSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  price: String,
  image: String,
  description: String,
  type: String,
  rating: Number,
  schedule: String,
  imagepath: String,
}, { timestamps: true });

const Entertainment = mongoose.model("Entertainment", entertainmentSchema);

module.exports = Entertainment;
