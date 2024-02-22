const express = require("express");
const router = express.Router();
const newsletterController = require("../controllers/newsletterController");

// Subscribe to newsletter route
router.post("/subscribe", newsletterController.subscribeToNewsletter);
router.get("/", newsletterController.getAllSubscriber);

module.exports = router;
