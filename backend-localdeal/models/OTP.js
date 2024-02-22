const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

const OtpMOdel = mongoose.model("OTPTable", OtpSchema);

module.exports = OtpMOdel;
