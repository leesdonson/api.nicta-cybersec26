import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "leecode000@gmail.com",
    pass: "cowybiexuahmfggy",
  },
});

export { transporter };
