// routes/categories/foodRoutes.js
const express = require('express');
const foodController = require('../../controllers/categories/foodController');

const router = express.Router();

router.get('/foods', foodController.getAllFoods);
router.get('/food/:id', foodController.getFoodById);
router.post('/food', foodController.createFood);
router.put('/food/:id', foodController.updateFood);
router.delete('/food/:id', foodController.deleteFood);

module.exports = router;
