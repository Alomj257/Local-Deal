// routes/categories/accommodationRoutes.js
const express = require('express');
const accommodationController = require('../../controllers/categories/AccommodationController');

const router = express.Router();

router.get('/accommodations', accommodationController.getAllAccommodations);
router.get('/accommodation/:id', accommodationController.getAccommodationById);
router.post('/accommodation', accommodationController.createAccommodation);
router.put('/accommodation/:id', accommodationController.updateAccommodation);
router.delete('/accommodation/:id', accommodationController.deleteAccommodation);

module.exports = router;
