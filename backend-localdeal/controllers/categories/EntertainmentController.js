// controllers/categories/EntertainmentController.js
const Entertainment = require('../../models/categories/EntertainmentModel');

const getAllEntertainment = async (req, res) => {
  try {
    const entertainment = await Entertainment.find();
    res.json(entertainment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEntertainmentById = async (req, res) => {
  try {
    const entertainment = await Entertainment.findById(req.params.id);
    if (!entertainment) {
      return res.status(404).json({ message: 'Entertainment not found' });
    }
    res.json(entertainment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEntertainment = async (req, res) => {
  try {
    const newEntertainment = await Entertainment.create(req.body);
    res.status(201).json(newEntertainment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEntertainment = async (req, res) => {
  try {
    const updatedEntertainment = await Entertainment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEntertainment) {
      return res.status(404).json({ message: 'Entertainment not found' });
    }
    res.json(updatedEntertainment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEntertainment = async (req, res) => {
  try {
    const deletedEntertainment = await Entertainment.findByIdAndDelete(req.params.id);
    if (!deletedEntertainment) {
      return res.status(404).json({ message: 'Entertainment not found' });
    }
    res.json(deletedEntertainment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEntertainment,
  getEntertainmentById,
  createEntertainment,
  updateEntertainment,
  deleteEntertainment,
};
