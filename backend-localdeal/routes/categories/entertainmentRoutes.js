// routes/categories/entertainmentRoutes.js
const express = require('express');
const entertainmentController = require('../../controllers/categories/EntertainmentController');

const router = express.Router();

router.get('/entertainment', entertainmentController.getAllEntertainment);
router.get('/entertainment/:id', entertainmentController.getEntertainmentById);
router.post('/entertainment', entertainmentController.createEntertainment);
router.put('/entertainment/:id', entertainmentController.updateEntertainment);
router.delete('/entertainment/:id', entertainmentController.deleteEntertainment);

module.exports = router;
