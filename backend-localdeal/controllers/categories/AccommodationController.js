// controllers/categories/AccommodationController.js
const Accommodation = require("../../models/categories/AccommodationModel");

const getAllAccommodations = async (req, res) => {
  try {
    const { limit, page } = req.query;
    const accommodations = await Accommodation.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(accommodations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.json(accommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAccommodation = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const newAccommodation = await Accommodation.create(req.body);
    res.status(201).json(newAccommodation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateAccommodation = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const updatedAccommodation = await Accommodation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAccommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.json(updatedAccommodation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAccommodation = async (req, res) => {
  try {
    const deletedAccommodation = await Accommodation.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAccommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.json(deletedAccommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAccommodations,
  getAccommodationById,
  createAccommodation,
  updateAccommodation,
  deleteAccommodation,
};
