// controllers/adminController.js
const upload = require("../middleware/upload");
const Admin = require("../models/AdminModel");
const jwt = require("jsonwebtoken");

const registerAdmin = async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      upload.single("file")(req, res, function (err) {
        if (err) {
          res.status(400).json({
            success: false,
            message: "image uploading issue please try again...",
          });
        } else resolve();
      });
    });
    const { password, cnfpassword } = req.body;
    console.log(password, cnfpassword);
    if (password !== cnfpassword) {
      return res
        .status(500)
        .json({ succcess: false, message: "password not matched" });
    }
    const existUser = await Admin.findOne({ email: req.body.email });
    if (existUser) {
      return res.status(500).json({
        succcess: false,
        message: "User already exist please try to login",
      });
    }
    req.body.profile = req?.file?.path;
    const newUser = await new Admin(req.body).save();
    res.status(201).json({
      success: true,
      newUser,
      message: "user registration successfully....!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
module.exports = registerAdmin;

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    const isPasswordMatch = await admin.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ adminId: admin._id }, "yourSecretKey", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allusers = await Admin.find();
    res.status(200).json({ success: true, allusers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await Admin.findById(req.params.id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateAdmin = async (req, res) => {
  try {
    const user = await Admin.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteAdmin = async (req, res) => {
  try {
    const user = await Admin.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, user, message: "delete successfully...!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAllUsers,
  getUserById,
  updateAdmin,
  deleteAdmin,
};
