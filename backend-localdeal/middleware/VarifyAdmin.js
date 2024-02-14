const jwt = require("jsonwebtoken");
const Admin = require("../models/AdminModel");
const IsAdmin = async (req, res, next) => {
  try {
    console.log(req.headers);
    const id = jwt.verify(
      req.headers.authorization,
      process.env.SECRET || "yourSecretKey"
    );
    console.log(id);
    if (!id || !id.adminId) {
      return res.status(403).json("Your are not authorize");
    }
    const admin = await Admin.findById(id.adminId);
    if (admin.role !== "ADMIN") {
      return res.status(403).json("you are not permited");
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports = IsAdmin;
