import { asyncHandler } from "@/utils/asyncHandler.ts";
import { sendTargetMail } from "@/utils/sendEmail.ts";
import type { Request, Response } from "express";

// login controller/service
const login = asyncHandler(async (req: Request, res: Response) => {
  return res.status(200).json("Login");
});

// ------------------------

// register controller/service
const register = asyncHandler(async (req: Request, res: Response) => {
  return res.status(200).json("Register");
});

// send target email
const sendTargetEmail = asyncHandler(async (req: Request, res: Response) => {
  const token = crypto.randomUUID();
  const targetEmail = "syntaxpacific@gmail.com";
  const url = `http://localhost:5173/forgot-password?token=${token}`;
  // send email
  const result = await sendTargetMail(targetEmail, url);

  res.status(200).json({
    message: "Target email has been sent.",
    result,
    success: true,
  });
});

// -------------------
// exports

export { login, register, sendTargetEmail };
