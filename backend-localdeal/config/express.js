const express = require("express");
const mongoose = require("./mongoDBConnection");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Define the frontend URL as an allowed origin
const allowedOrigins = ['http://localhost:3000', 'https://64c2-2409-40e0-52-435c-5c29-f26a-b880-8616.ngrok-free.app',];

// Middleware
app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));


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
