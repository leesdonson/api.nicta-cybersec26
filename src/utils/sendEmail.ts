import { emailTemplate } from "@/lib/emailTemplate.ts";
import { transporter } from "./mailTransporter.ts";

export const sendTargetMail = async (target: string, url: string) => {
  const mailOptions = {
    from: "BSP Cyber Security Team <leedonson000@gmail.com>",
    to: target,
    subject: "Critical Security Alert!",
    html: emailTemplate.replace("{url}", url),
  };

  // send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Target email has been sent.", info.response);
  } catch (error) {
    console.log("Something went wrong!", error);
  }
};
