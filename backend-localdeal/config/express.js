const express = require("express");
const mongoose = require("./mongoDBConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Define the frontend URL as an allowed origin
const allowedOrigins = [
  'http://localhost:3000',
  // Add your ngrok URL here
  'http://192.168.54.138:3000',
];

// Middleware
app.use((req, res, next) => {
  // Set Cache-Control header for all responses
  res.setHeader('Cache-Control', 'public, max-age=3600'); // Adjust max-age as needed
  
  // CORS setup
  cors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  })(req, res, next);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your API routes
const routes = require("../routes");
app.use("/api", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

module.exports = app;
