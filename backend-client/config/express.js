// config/express.js
const express = require("express");
const app = express();
const mongoose = require("./mongoDBConnection");

// Define your API routes
app.get("/", (req, res) => {
  res.send("Local Deal welcomes you");
});

module.exports = app;
