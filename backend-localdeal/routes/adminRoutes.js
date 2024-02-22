// routes/admins.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const VerifyUser = require("../middleware/VerifyUser");
const IsAdmin = require("../middleware/VarifyAdmin");

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/users", VerifyUser, IsAdmin, adminController.getAllUsers);
router.get("/users/:id", VerifyUser, IsAdmin, adminController.getUserById);
router.put("/update/:id", VerifyUser, IsAdmin, adminController.UpdateUser);
router.delete("/users/:id", VerifyUser, IsAdmin, adminController.deleteAdmin);
router.post("/forget/send-email", adminController.forgetPassword);
router.post("/forget/verify", adminController.verififyOtp);
router.post("/forget/set-password", adminController.updateUpassword);

module.exports = router;
