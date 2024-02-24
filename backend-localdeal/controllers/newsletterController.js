// const NewsletterSubscription = require('../models/NewsletterModel');

// const subscribeToNewsletter = async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Check if email already exists
//     const existingSubscription = await NewsletterSubscription.findOne({ email });

//     if (existingSubscription) {
//       return res.status(400).json({ message: 'Email is already subscribed.' });
//     }

//     // Create a new subscription
//     const newSubscription = new NewsletterSubscription({ email });
//     await newSubscription.save();

//     res.status(201).json({ message: 'Subscription successful.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error.' });
//   }
// };

// module.exports = {
//   subscribeToNewsletter,
// };

const { sendEmail } = require("../middleware/EmailHandle");
const NewsletterSubscription = require("../models/NewsletterModel");
const nodemailer = require("nodemailer");

const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if email already exists
    const existingSubscription = await NewsletterSubscription.findOne({
      email,
    });
    if (existingSubscription) {
      return res.status(400).json({ message: "your email already subscribed" });
    }
    await NewsletterSubscription(req.body).save();
    const message = `<h1>Thank you for subscribing our service</h1> <h5> you will get all update from our side </h5>`;
    const subject = "Welcome our Service Local Deal";
    await sendEmail(message, req, subject);

    res.status(201).json({ message: "Subscription successful." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};
const getAllSubscriber = async (req, res) => {
  try {
    const { limit, page } = req.query;
    const allEmails = await NewsletterSubscription.find()
      .skip((page - 1) * limit)
      .limit(limit || 999999);
    res.status(200).send(allEmails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};
const deleteEmail = async (req, res) => {
  try {
    await NewsletterSubscription.findByIdAndDelete(req.params.id);
    res.status(200).json("email deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};
module.exports = {
  subscribeToNewsletter,
  getAllSubscriber,
  deleteEmail,
};
