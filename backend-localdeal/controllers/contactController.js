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
    const { limit, page } = req.query;
    const allContacts = await Contact.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json(allContacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json("Contact deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

module.exports = { getAllContacts, submitContactForm, deleteContact };
