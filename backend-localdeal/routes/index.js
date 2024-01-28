const express = require('express');
const contactRoutes = require('./contactRoutes');
const newsletterRoutes = require('./newsletterRoutes');
const router = express.Router();

// Use the contactRoutes for paths starting with '/contact'
router.use('/contact', contactRoutes);
router.use('/newsletter', newsletterRoutes);

module.exports = router;
