import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp",
  port: 5432,
  secure: true,
  auth: {
    user: "example@gmail.com",
    pass: "password123",
  },
});

export { transporter };
