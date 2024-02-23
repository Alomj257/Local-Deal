// controllers/categories/ServiceController.js
const Service = require("../../models/categories/ServiceModel");

const getAllServices = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const services = await Service.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createService = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const newService = await Service.create(req.body);
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(updatedService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(deletedService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
