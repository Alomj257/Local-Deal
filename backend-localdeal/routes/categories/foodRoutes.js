// routes/categories/foodRoutes.js
const express = require("express");
const foodController = require("../../controllers/categories/foodController");
const uploadFile = require("../../middleware/uploadFile");

const router = express.Router();

router.get("/food", foodController.getAllFoods);
router.get("/food/:id", foodController.getFoodById);
router.post(
  "/food",
  uploadFile("./Public/Category/"),
  foodController.createFood
);
router.put(
  "/food/:id",
  uploadFile("./Public/Category/"),
  foodController.updateFood
);
router.delete("/food/:id", foodController.deleteFood);

module.exports = router;
