// const Promotion = require('../models/PromotionModel');

// const getAllPromotions = async (req, res) => {
//   try {
//     const promotions = await Promotion.find();
//     res.json(promotions);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const getPromotionById = async (req, res) => {
//   try {
//     const promotion = await Promotion.findById(req.params.id);
//     if (!promotion) {
//       return res.status(404).json({ message: 'Promotion not found' });
//     }
//     res.json(promotion);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const createPromotion = async (req, res) => {
//   try {
//     const newPromotion = await Promotion.create(req.body);
//     res.status(201).json(newPromotion);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const updatePromotion = async (req, res) => {
//   try {
//     const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedPromotion) {
//       return res.status(404).json({ message: 'Promotion not found' });
//     }
//     res.json(updatedPromotion);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const deletePromotion = async (req, res) => {
//   try {
//     const deletedPromotion = await Promotion.findByIdAndDelete(req.params.id);
//     if (!deletedPromotion) {
//       return res.status(404).json({ message: 'Promotion not found' });
//     }
//     res.json(deletedPromotion);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getAllPromotions,
//   getPromotionById,
//   createPromotion,
//   updatePromotion,
//   deletePromotion,
// };


// controllers/PromotionController.js

const Promotion = require('../models/PromotionModel');
const NewsletterSubscription = require('../models/NewsletterModel');
const nodemailer = require('nodemailer');

// Function to send promotional emails to subscribers
const sendPromotionalEmails = async (promotion) => {
  try {
    // Retrieve all subscribers
    const subscribers = await NewsletterSubscription.find({}, 'email');

    // Send promotional email to all subscribers
    const transporter = nodemailer.createTransport({
      // configure your email provider here
      // Example for Gmail:
      service: 'Gmail',
      auth: {
        user: 'jahangir.dev.test@gmail.com',
        pass: 'gjqc wnbf xejh goee',
      },
    });

    const mailOptions = {
      from: 'jahangir.dev.test@gmail.com',
      subject: 'New Promotion Alert!',
      text: 'Check out our localdeal latest promotion, ' + promotion.description,
    };

    subscribers.forEach(async (subscriber) => {
      mailOptions.to = subscriber.email;
      await transporter.sendMail(mailOptions);
    });
  } catch (error) {
    console.error('Error sending promotional emails:', error);
  }
};

// Function to create a new promotion
const createPromotion = async (req, res) => {
  try {
    const newPromotion = await Promotion.create(req.body);
    
    // Send promotional emails to subscribers
    await sendPromotionalEmails(newPromotion);

    res.status(201).json(newPromotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllPromotions = async (req, res) => {
  try {
    const promotions = await Promotion.find();
    res.json(promotions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPromotionById = async (req, res) => {
  try {
    const promotion = await Promotion.findById(req.params.id);
    if (!promotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }
    res.json(promotion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePromotion = async (req, res) => {
  try {
    const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPromotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }
    res.json(updatedPromotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePromotion = async (req, res) => {
  try {
    const deletedPromotion = await Promotion.findByIdAndDelete(req.params.id);
    if (!deletedPromotion) {
      return res.status(404).json({ message: 'Promotion not found' });
    }
    res.json(deletedPromotion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPromotion,
  getAllPromotions,
  getPromotionById,
  createPromotion,
  updatePromotion,
  deletePromotion,
};
