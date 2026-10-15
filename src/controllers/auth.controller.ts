import type { Request, Response } from "express";
// login
const login = async (req: Request, res: Response) => {
  return res.status(200).json("Login");
};

// register
const register = (req: Request, res: Response) => {
  return res.status(200).json("Register");
};

export { login, register };
