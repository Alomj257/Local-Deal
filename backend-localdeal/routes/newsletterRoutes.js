const express = require("express");
const router = express.Router();
const newsletterController = require("../controllers/newsletterController");
const uploadFile = require("../middleware/uploadFile");

// Subscribe to newsletter route
router.post("/subscribe", newsletterController.subscribeToNewsletter);
router.post("/", uploadFile("/"), newsletterController.subscribeToNewsletter);
router.get("/", newsletterController.getAllSubscriber);
router.delete("/:id", newsletterController.deleteEmail);

module.exports = router;
