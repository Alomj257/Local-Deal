// routes/categories/serviceRoutes.js
const express = require("express");
const serviceController = require("../../controllers/categories/serviceController");
const uploadFile = require("../../middleware/uploadFile");

const router = express.Router();

router.get("/services", serviceController.getAllServices);
router.get("/services/:id", serviceController.getServiceById);
router.post(
  "/services",
  uploadFile("./Public/Category/"),
  serviceController.createService
);
router.put(
  "/services/:id",
  uploadFile("./Public/Category/"),
  serviceController.updateService
);
router.delete("/services/:id", serviceController.deleteService);

module.exports = router;
