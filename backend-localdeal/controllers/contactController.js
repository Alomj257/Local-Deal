const Contact = require("../models/ContactModel");

// Handle form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getAllContacts = async (req, res) => {
  try {
    const limit = req.query;
    const allContacts = await Contact.find().limit(limit || 9999999);
    res.status(200).json(allContacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllContacts, submitContactForm };
