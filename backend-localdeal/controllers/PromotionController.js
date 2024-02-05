// controllers/PromotionController.js
const Promotion = require('../models/PromotionModel');

const getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find();
    res.json(promotions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPromotionById = async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);
    if (!promotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }
    res.json(promotion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPromotion = async (req, res) => {
  try {
    const newPromotion = await Promotion.create(req.body);
    res.status(201).json(newPromotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePromotion = async (req, res) => {
  try {
    const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPromotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }
    res.json(updatedPromotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePromotion = async (req, res) => {
  try {
    const deletedPromotion = await Promotion.findByIdAndDelete(req.params.id);
    if (!deletedPromotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }
    res.json(deletedPromotion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPromotions,
  getPromotionById,
  createPromotion,
  updatePromotion,
  deletePromotion,
};
