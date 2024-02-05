const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/NewsletterController');

// Subscribe to newsletter route
router.post('/subscribe', newsletterController.subscribeToNewsletter);

module.exports = router;
