// models/categories/HomestoreModel.js
const mongoose = require('mongoose');

const homestoreSchema = new mongoose.Schema({
  name: String,
  location: String,
  category: String,
  products: [{ name: String, price: String, description: String, image: String }],
});

const Homestore = mongoose.model('Homestore', homestoreSchema);

module.exports = Homestore;
