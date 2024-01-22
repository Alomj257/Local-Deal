// controllers/contactController.js

const Contact = require('../models/contact'); // Assuming you have a Contact model

exports.submitContactForm = async (req, res) => {
  try {
    // Extract form data from the request body
    const { name, email, subject, message } = req.body;

    // Create a new Contact instance
    const newContact = new Contact({ name, email, subject, message });

    // Save the contact form data to the database
    await newContact.save();

    // Respond with a success message
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
