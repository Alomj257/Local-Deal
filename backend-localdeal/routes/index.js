const express = require('express');
const contactRoutes = require('./contactRoutes');
const router = express.Router();

// Use the contactRoutes for paths starting with '/contact'
router.use('/contact', contactRoutes);

module.exports = router;
