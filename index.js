const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const userMailOptions = {
    from: `"DevUne<span style="color: #13bbff">X.</span> Support" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thank You for Contacting Me!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #007bff; text-align: center;">Thank You, ${name}!</h2>
          <div style="text-align: center; margin-bottom: 20px;">
          </div>
          <p style="color: #333;">I appreciate you reaching out to me. I will review your message and get back to you as soon as possible.</p>
          <p style="color: #333;">Here's a copy of your message:</p>
          <div style="background-color: #f7f7f7; padding: 10px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Message:</strong> ${message}</p>
          </div>
          <p style="color: #333;">Best regards,<br/>DevUne<span style="color: #13bbff">X.</span></p>
      </div>
    `,
  };

  const ownerMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.OWNER_EMAIL,
    subject: 'New Contact Form Submission',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #007bff;">New Contact Form Submission</h2>
        <p style="color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="color: #333;"><strong>Email:</strong> ${email}</p>
        <p style="color: #333;"><strong>Message:</strong></p>
        <div style="background-color: #f7f7f7; padding: 10px; border-radius: 5px;">
          <p>${message}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(userMailOptions);

    await transporter.sendMail(ownerMailOptions);

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
