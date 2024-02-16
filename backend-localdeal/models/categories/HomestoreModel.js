// models/categories/HomestoreModel.js
const mongoose = require('mongoose');

const homestoreSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  price: String,
  image: String,
  description: String,
  discount: String,
  products: [String],
  rating: Number
});

const Homestore = mongoose.model('Homestore', homestoreSchema);

module.exports = Homestore;
