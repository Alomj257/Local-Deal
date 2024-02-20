// routes/categories/beautyRoutes.js
const express = require("express");
const beautyController = require("../../controllers/categories/beautyController");
const uploadFile = require("../../middleware/uploadFile");

const router = express.Router();

router.get("/beauty-service", beautyController.getAllBeautyServices);
router.get("/beauty-service/:id", beautyController.getBeautyServiceById);
router.post(
  "/beauty-service",
  uploadFile("./Public/Category/"),
  beautyController.createBeautyService
);
router.put(
  "/beauty-service/:id",
  uploadFile("./Public/Category/"),
  beautyController.updateBeautyService
);
router.delete("/beauty-service/:id", beautyController.deleteBeautyService);

module.exports = router;
