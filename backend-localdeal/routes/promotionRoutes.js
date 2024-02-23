const express = require("express");
const promotionController = require("../controllers/PromotionController");

const router = express.Router();

router.get("/", promotionController.getAllPromotions);
router.get("/:id", promotionController.getPromotionById);
router.post("/", promotionController.createPromotion);
router.put("/:id", promotionController.updatePromotion);
router.delete("/:id", promotionController.deletePromotion);

module.exports = router;
