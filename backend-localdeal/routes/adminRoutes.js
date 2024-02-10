// routes/admins.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/users", adminController.getAllUsers);
router.get("/users/:id", adminController.getUserById);
router.put("/update/:id", adminController.UpdateUser);
router.delete("/users/:id", adminController.deleteAdmin);

module.exports = router;
