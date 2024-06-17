import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  // TODO: 1. create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  // TODO: 2. define the email options
  const mailOptions = {
    from: "Depermana <depermana@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // TODO: 3. send the email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
