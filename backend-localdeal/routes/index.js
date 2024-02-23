const express = require("express");
const contactRoutes = require("./contactRoutes");
const newsletterRoutes = require("./newsletterRoutes");
const adminRoutes = require("./adminRoutes");
const foodRoutes = require("./categories/foodRoutes");
const accommodationRoutes = require("./categories/accommodationRoutes");
const beautyRoutes = require("./categories/beautyRoutes");
const entertainmentRoutes = require("./categories/entertainmentRoutes");
const activitiesRoutes = require("./categories/activityRoutes");
const homestoreRoutes = require("./categories/homestoreRoutes");
const serviceRoutes = require("./categories/serviceRoutes");
const promotionRoutes = require("./promotionRoutes");
const router = express.Router();

// Use the contactRoutes for paths starting with '/contact'
router.use("/contact", contactRoutes);
router.use("/newsletter", newsletterRoutes);
router.use("/admin", adminRoutes);
router.use(
  "/categories",
  foodRoutes,
  accommodationRoutes,
  beautyRoutes,
  entertainmentRoutes,
  activitiesRoutes,
  homestoreRoutes,
  serviceRoutes
);
router.use("/permotions", promotionRoutes);
module.exports = router;
