// routes/categories/homestoreRoutes.js
const express = require("express");
const homestoreController = require("../../controllers/categories/homestoreController");
const uploadFile = require("../../middleware/uploadFile");

const router = express.Router();

router.get("/homestores", homestoreController.getAllHomestores);
router.get("/homestores/:id", homestoreController.getHomestoreById);
router.post(
  "/homestores",
  uploadFile("./Public/Category/"),
  homestoreController.createHomestore
);
router.put(
  "/homestores/:id",
  uploadFile("./Public/Category/"),
  homestoreController.updateHomestore
);
router.delete("/homestores/:id", homestoreController.deleteHomestore);

module.exports = router;
