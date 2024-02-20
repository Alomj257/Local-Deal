// controllers/categories/BeautyController.js
const Beauty = require("../../models/categories/BeautyModel");

const getAllBeautyServices = async (req, res) => {
  try {
    const beautyServices = await Beauty.find();
    res.json(beautyServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBeautyServiceById = async (req, res) => {
  try {
    const beautyService = await Beauty.findById(req.params.id);
    if (!beautyService) {
      return res.status(404).json({ message: "Beauty service not found" });
    }
    res.json(beautyService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBeautyService = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const newBeautyService = await Beauty.create(req.body);
    res.status(201).json(newBeautyService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBeautyService = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const updatedBeautyService = await Beauty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBeautyService) {
      return res.status(404).json({ message: "Beauty service not found" });
    }
    res.json(updatedBeautyService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBeautyService = async (req, res) => {
  try {
    const deletedBeautyService = await Beauty.findByIdAndDelete(req.params.id);
    if (!deletedBeautyService) {
      return res.status(404).json({ message: "Beauty service not found" });
    }
    res.json(deletedBeautyService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBeautyServices,
  getBeautyServiceById,
  createBeautyService,
  updateBeautyService,
  deleteBeautyService,
};
