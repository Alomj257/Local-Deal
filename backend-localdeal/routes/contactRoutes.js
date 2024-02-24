const express = require("express");
const {
  submitContactForm,
  getAllContacts,
  deleteContact,
  replyContact,
} = require("../controllers/contactController");
const router = express.Router();

// Define the route for handling the contact form submission
router.post("/submit", submitContactForm);
router.post("/", submitContactForm);
router.get("/", getAllContacts);
router.delete("/:id", deleteContact);
router.post("/reply", replyContact);

module.exports = router;
