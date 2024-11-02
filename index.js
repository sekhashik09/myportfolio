const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const allowedOrigins = ['https://yourfrontend.com']; // Update with your frontend domain

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  const userMailOptions = {
    from: `"DevUneX Support" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thank You for Contacting Me!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #007bff; text-align: center;">Thank You, ${name}!</h2>
          <div style="text-align: center; margin-bottom: 20px;">
              <img src="cid:logo" alt="DevUneX Logo" width="150" style="margin-bottom: 20px;">
          </div>
          <p style="color: #333;">We appreciate you reaching out to us. Our team will review your message and get back to you as soon as possible.</p>
          <p style="color: #333;">Here's a copy of your message:</p>
          <div style="background-color: #f7f7f7; padding: 10px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Message:</strong> ${message}</p>
          </div>
          <p style="color: #333;">Best regards,<br/>DevUneX.</p>
      </div>
    `,
    attachments: [
      {
        filename: 'DevUne.png',
        path: path.join(__dirname, 'public', 'DevUne.png'),
        cid: 'logo'
      }
    ]
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
    console.error('Failed to send email:', error.message);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
