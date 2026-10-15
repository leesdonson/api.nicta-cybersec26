import { asyncHandler } from "@/utils/asyncHandler.js";
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

// -------------------
// exports

export { login, register };
