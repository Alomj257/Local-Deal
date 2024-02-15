const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  businessName: String,
  promotionType: String,
  imageUrls: [String],
  location: String,
  promotionPlan: String,
  offer: String,
  description: String,
  link: String
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
