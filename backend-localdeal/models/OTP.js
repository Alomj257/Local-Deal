const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

const OtpMOdel = mongoose.model("otp", OtpSchema);

module.exports = OtpMOdel;
