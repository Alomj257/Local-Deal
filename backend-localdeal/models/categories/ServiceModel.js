// models/categories/ServiceModel.js
const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: String,
  location: String,
  duration: String,
  category: String,
  price: String,
  image: String,
  description: String,
  provider: String,
  rating: Number,
  imagepath: String,
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
