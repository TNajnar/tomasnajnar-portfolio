import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: `Failed to send email: ${error}` });
  }
}

