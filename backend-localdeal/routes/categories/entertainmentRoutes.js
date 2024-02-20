// routes/categories/entertainmentRoutes.js
const express = require("express");
const entertainmentController = require("../../controllers/categories/entertainmentController");
const uploadFile = require("../../middleware/uploadFile");

const router = express.Router();

router.get("/entertainment", entertainmentController.getAllEntertainment);
router.get("/entertainment/:id", entertainmentController.getEntertainmentById);
router.post(
  "/entertainment",
  uploadFile("./Public/Category/"),
  entertainmentController.createEntertainment
);
router.put(
  "/entertainment/:id",
  uploadFile("./Public/Category/"),
  entertainmentController.updateEntertainment
);
router.delete(
  "/entertainment/:id",
  entertainmentController.deleteEntertainment
);

module.exports = router;
