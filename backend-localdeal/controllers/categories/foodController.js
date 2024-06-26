// controllers/categories/FoodController.js
const Food = require("../../models/categories/FoodModel");

const getAllFoods = async (req, res) => {
  try {
    const { limit, page } = req.query;
    const foods = await Food.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFood = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const newFood = await Food.create(req.body);
    res.status(201).json(newFood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateFood = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = "/category/image/" + req?.file?.originalname;
      req.body.imagepath = req?.file?.path;
    }
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(updatedFood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFood = async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);
    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(deletedFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
};
