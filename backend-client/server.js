// server.js
const app = require("./config/express");
const apiRoutes = require("./routes/apiRoutes");

// Mount the API routes
app.use("/api", apiRoutes);

// Set up the port for your server
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
