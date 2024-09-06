// import express, { Request, Response } from 'express';
// import nodemailer from 'nodemailer';
// import bodyParser from 'body-parser';
// import cors from 'cors';

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: 'gmail', // or another email service
//   auth: {
//     user: '',
//     pass: '',
//   },
// });

// app.post('/api/contact', (req: Request, res: Response) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: 'your-email@gmail.com',
//     subject: 'Contact Us Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error: ', error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ', info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
