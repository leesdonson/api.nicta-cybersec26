import { emailTemplate } from "@/lib/emailTemplate.js";
import { transporter } from "./mailTransporter.js";

export const sendVerificationCode = async (
  to: string,
  verificationCode: string,
) => {
  const mailOptions = {
    from: "Example <example@gmail.com>",
    to,
    subject: "Verification Code",
    html: emailTemplate.replace("{verificationCode}", verificationCode),
  };

  // send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info.response);
  } catch (error) {
    console.log("Something went wrong!", error);
  }
};
