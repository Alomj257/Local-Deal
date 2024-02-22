const nodemailer = require("nodemailer");
const NewsletterSubscription = require("../models/NewsletterModel");

const newsLatterEmailSend = async (req) => {
  const emails = [];
  const allEmails = await NewsletterSubscription.find();
  for (let i = 0; i < allEmails.length; i++) {
    emails.push(allEmails[i].email);
  }
  const recipients = emails?.join(", ");
  const transpoter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587 || 465,
    secure: false,
    // kzad nwge qavv xvlv

    requireTLS: true,
    auth: {
      user: process.env.EMAIL || "spydelicious4613@gmail.com",
      pass: process.env.PASS || "kzad nwge qavv xvlv",
    },
  });
  const mailOption = {
    from: process.env.EMAIL,
    to: recipients,
    subject: "Local Deal no reply",
    text: "details",
    html: `<h1>Thank you for subscribing to our newsletter.</h1>
        <p>
          I hope you are aware out privacy. This is the one time password when
          you use this password after that its useless
        </p>
        <h5>Verification</h5>
        `,
  };
  transpoter.sendMail(mailOption, (errr, info) => {
    if (errr) {
      console.log(errr);
      return;
    } else {
      console.log("seccessfully sent");
      return "seccessfully sent";
    }
  });
};
const sendEmailByEmail = (otp, req) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587 || 465,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL || "spydelicious4613@gmail.com",
        pass: process.env.PASS || "kzad nwge qavv xvlv",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL || "spydelicious4613@gmail.com",
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

module.exports = { newsLatterEmailSend, sendEmailByEmail };
