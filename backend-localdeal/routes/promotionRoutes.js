// routes/promotionRoutes.js
const express = require('express');
const promotionController = require('../controllers/PromotionController');

const router = express.Router();

router.get('/promotions', promotionController.getAllPromotions);
router.get('/promotions/:id', promotionController.getPromotionById);
router.post('/promotions', promotionController.createPromotion);
router.put('/promotions/:id', promotionController.updatePromotion);
router.delete('/promotions/:id', promotionController.deletePromotion);

module.exports = router;
