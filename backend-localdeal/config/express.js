const express = require("express");
const mongoose = require("./mongoDBConnection");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const app = express();
dotenv.config();

// Define the frontend URL as an allowed origin
const allowedOrigins = [
  "http://localhost:3000",
  // Add your ngrok URL here
  "http://192.168.54.138:3000",
];

// Middleware
// Set Cache-Control header for all responses
// app.use((req, res, next) => {
//   res.setHeader("Cache-Control", "public, max-age=3600"); // Adjust max-age as needed
//   next();
// });

// CORS setup
app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static images
app.use(
  "/category/image",
  express.static(path.join(__dirname, "../public/Category"))
);
app.use(
  "/profile/image",
  express.static(path.join(__dirname, "../public/UserImage"))
);

// Define your API routes
const routes = require("../routes");
app.use("/api", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

module.exports = app;
