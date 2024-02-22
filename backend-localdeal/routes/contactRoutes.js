const express = require("express");
const {
  submitContactForm,
  getAllContacts,
} = require("../controllers/contactController");
const router = express.Router();

// Define the route for handling the contact form submission
router.post("/submit", submitContactForm);
router.get("/", getAllContacts);

module.exports = router;
