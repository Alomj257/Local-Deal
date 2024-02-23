// controllers/categories/HomestoreController.js
const Homestore = require("../../models/categories/HomestoreModel");

const getAllHomestores = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const homestores = await Homestore.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(homestores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHomestoreById = async (req, res) => {
  try {
    const homestore = await Homestore.findById(req.params.id);
    if (!homestore) {
      return res.status(404).json({ message: "Homestore not found" });
    }
    res.json(homestore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createHomestore = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const newHomestore = await Homestore.create(req.body);
    res.status(201).json(newHomestore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateHomestore = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const updatedHomestore = await Homestore.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHomestore) {
      return res.status(404).json({ message: "Homestore not found" });
    }
    res.json(updatedHomestore);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteHomestore = async (req, res) => {
  try {
    const deletedHomestore = await Homestore.findByIdAndDelete(req.params.id);
    if (!deletedHomestore) {
      return res.status(404).json({ message: "Homestore not found" });
    }
    res.json(deletedHomestore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllHomestores,
  getHomestoreById,
  createHomestore,
  updateHomestore,
  deleteHomestore,
};
