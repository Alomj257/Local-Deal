// routes/apiRoutes.js
const express = require("express");
const router = express.Router();

// Define your API routes here
router.get("/", (req, res) => {
  res.send("Local Deal welcomes you from API route");
});

module.exports = router;
