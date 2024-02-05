const express = require('express');
const router = express.Router();
const contactController = require('../controllers/ContactController');

// Define the route for handling the contact form submission
router.post('/submit', contactController.submitContactForm);

module.exports = router;
