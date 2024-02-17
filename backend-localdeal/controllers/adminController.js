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
    req.body.profile = "/profile/image/" + req?.file?.originalname;
    req.body.path = req?.file?.path;
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
const UpdateUser = async (req, res) => {
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
    if (req.file) {
      req.body.profile = "/profile/image/" + req?.file?.originalname;
      req.body.path = req?.file?.path;
    }
    const { password, ...other } = req.body;
    const updatedUser = await Admin.findByIdAndUpdate(
      req.params.id,
      { $set: other },
      { new: true }
    );
    res.status(201).json({
      success: true,
      updatedUser,
      message: "Admin updated successfully....!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res
        .status(404)
        .json({ message: "Admin not found, Please contact support." });
    }
    const isPasswordMatch = await admin.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ adminId: admin._id }, "yourSecretKey", {
      expiresIn: "3h",
    });

    res.json({ token, admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allusers = await Admin.find().limit(req.query.limit);
    res.status(200).json(allusers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await Admin.findById({ _id: req.params.id });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "admin not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateAdmin = async (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
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
    req.body.profile = "/profile/image/" + req?.file?.originalname;
    req.body.path = req?.file?.path;
    const updatedUser = await Admin.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      updatedUser,
      message: "Admin updated successfully....",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
const deleteAdmin = async (req, res) => {
  try {
    const checkuser = await Admin.findById(req.params.id);
    const user = await Admin.findByIdAndDelete(req.params.id);
    console.log(checkuser);
    if (!user) {
      return res
        .status(404)
        .json({ success: true, message: "admin not found" });
    }
    res
      .status(200)
      .json({ success: true, user, message: "delete successfully...!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateAdmin,
  registerAdmin,
  loginAdmin,
  getAllUsers,
  getUserById,
  deleteAdmin,
  UpdateUser,
};
