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

const NewsletterSubscription = require('../models/NewsletterModel');
const nodemailer = require('nodemailer');

const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if email already exists
    const existingSubscription = await NewsletterSubscription.findOne({ email });

    if (existingSubscription) {
      return res.status(400).json({ message: 'Email is already subscribed.' });
    }

    // Create a new subscription
    const newSubscription = new NewsletterSubscription({ email });
    await newSubscription.save();

    // Send a custom email to the subscriber
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
      to: email,
      subject: 'Welcome to our newsletter!',
      text: 'Thank you for subscribing to our newsletter.',
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Subscription successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
};

module.exports = {
  subscribeToNewsletter,
};
