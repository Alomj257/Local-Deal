// routes/categories/accommodationRoutes.js
const express = require("express");
const accommodationController = require("../../controllers/categories/accommodationController");
const uploadFile = require("../../middleware/uploadFile");

const router = express.Router();

router.get("/accommodation", accommodationController.getAllAccommodations);
router.get("/accommodation/:id", accommodationController.getAccommodationById);
router.post(
  "/accommodation",
  uploadFile("./Public/Category/"),
  accommodationController.createAccommodation
);
router.put(
  "/accommodation/:id",
  uploadFile("./Public/Category/"),
  accommodationController.updateAccommodation
);
router.delete(
  "/accommodation/:id",
  accommodationController.deleteAccommodation
);

module.exports = router;
