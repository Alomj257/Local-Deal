// models/PromotionModel.js
const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  heading: String,
  text: String,
  uploadDate: Date,
  uploadedBy: String,
  imageUrl: String,
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
