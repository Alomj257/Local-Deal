// models/categories/ServiceModel.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  price: String,
  provider: String,
  duration: String,
  image: String,
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
