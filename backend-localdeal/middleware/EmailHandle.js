const nodemailer = require("nodemailer");
const NewsletterSubscription = require("../models/NewsletterModel");

const newsLatterEmailSend = async (message) => {
  return new Promise(async (resolve, reject) => {
    try {
      const emails = [];
      const allEmails = await NewsletterSubscription.find();
      for (let i = 0; i < allEmails.length; i++) {
        emails.push(allEmails[i].email);
      }
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.HOST || "smtp.gmail.com",
        port: 587 || 465,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });
      for (let i = 0; i < emails.length; i++) {
        const recipient = emails[i];
        const mailOption = {
          from: process.env.EMAIL,
          to: recipient,
          subject: "Local Deal no reply",
          text: "details",
          html: `<h1>Thank you for subscribing to our newsletter.</h1>
            <p>
              I hope you are aware out privacy. This is the one time password when
              you use this password after that its useless
            </p>
            <p> ${message}</p>
            <h5>Verification</h5>
            `,
        };

        // Attempt to send email
        await transporter.sendMail(mailOption);
        console.log("Successfully sent email to:", recipient);
      }

      resolve("Successfully sent all emails.");
    } catch (error) {
      console.error("Failed to send emails:", error);
      reject(error);
    }
  });
};

const sendEmailByEmail = (otp, req) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST || "smtp.gmail.com",
      port: 587 || 465,
      service: "gmail",
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "Local Deal no reply",
      text: "details",
      html: `<h1>One Time password here </h1>
          <p>
            I hope you are aware out privacy. This is the one time password when
            you use this password after that its useless
          </p>
          <h2>${otp}</h2>
          <h5>Just one time verification</h5>
          `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log("Successfully sent");
        resolve(true);
      }
    });
  });
};
const sendEmail = (message, req, subject) => {
  console.log(process.env.EMAIL);
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587 || 465,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: subject,
      text: "details",
      html: `${message}
          `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log("Successfully sent");
        resolve(true);
      }
    });
  });
};

module.exports = { newsLatterEmailSend, sendEmailByEmail, sendEmail };
