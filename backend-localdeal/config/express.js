// config/express.js
const express = require("express");
const mongoose = require("./mongoDBConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Define your API routes
const routes = require("../routes"); // Adjust the path as needed
app.use("/api", routes);

module.exports = app;
