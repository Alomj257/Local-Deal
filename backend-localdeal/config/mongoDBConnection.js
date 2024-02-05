const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://alomj257:alomj257@cluster0.eesendj.mongodb.net/local-deal";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on("error", (err) => {
  console.log("DBConnection connection failed", err);
});

connection.on("connected", () => {
  console.log("DBConnection connected successfully");
});

module.exports = connection;
