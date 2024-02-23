const express = require("express");
const {
  submitContactForm,
  getAllContacts,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

// Define the route for handling the contact form submission
router.post("/", submitContactForm);
router.get("/", getAllContacts);
router.delete("/:id", deleteContact);

module.exports = router;
