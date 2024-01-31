const express = require('express');
const contactRoutes = require('./contactRoutes');
const newsletterRoutes = require('./newsletterRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const adminsRoutes = require('./adminsRoutes');
const router = express.Router();

// Use the contactRoutes for paths starting with '/contact'
router.use('/contact', contactRoutes);
router.use('/newsletter', newsletterRoutes);
router.use('/categories', categoriesRoutes);
router.use('/admins', adminsRoutes);

module.exports = router;
