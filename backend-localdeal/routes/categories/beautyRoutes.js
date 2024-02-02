// routes/categories/beautyRoutes.js
const express = require('express');
const beautyController = require('../../controllers/categories/BeautyController');

const router = express.Router();

router.get('/beauty-services', beautyController.getAllBeautyServices);
router.get('/beauty-service/:id', beautyController.getBeautyServiceById);
router.post('/beauty-service', beautyController.createBeautyService);
router.put('/beauty-service/:id', beautyController.updateBeautyService);
router.delete('/beauty-service/:id', beautyController.deleteBeautyService);

module.exports = router;
