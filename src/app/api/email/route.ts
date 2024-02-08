import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST (request: NextRequest): Promise<NextResponse> {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
        setting service as 'gmail' is same as providing these setings:

        host: "smtp.gmail.com",
        port: 465,
        secure: true

    */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ message: `Failed to send email: ${err}` }, { status: 500 });
  }
};
