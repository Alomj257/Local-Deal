const { sendEmail } = require("../middleware/EmailHandle");
const Contact = require("../models/ContactModel");

// Handle form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getAllContacts = async (req, res) => {
  try {
    const { limit, page } = req.query;
    const allContacts = await Contact.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json(allContacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json("Contact deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};
const replyContact = async (req, res) => {
  console.log(req.body);
  try {
    const message = `<body style="font-family: Arial, sans-serif;">
    <div style="margin: 20px;">
        <p>Dear ${req.body.name},</p>
        <p>Thank you for reaching out to us. We appreciate your message.</p>
        <p>We wanted to inform you that we have received your message with the following details:</p>
        <ul>
            <li><strong>Name:</strong> ${req.body.name}</li>
            <li><strong>Email:</strong> ${req.body.email}</li>
            <li><strong>Message:</strong> ${req.body.message}</li>
        </ul>
       
        <h3> Message Reply </h3>
        <p style="line-height: 1.6;">${req.body.reply}</p>
        <p>Best regards,</p>
        <p>Your Company Name</p>
    </div>
</body>
    `;
    const subject = "Reply from Local Deal";
    await sendEmail(message, req, subject);
    res.status(200).json("your message has been sent");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};

module.exports = {
  getAllContacts,
  submitContactForm,
  deleteContact,
  replyContact,
};
