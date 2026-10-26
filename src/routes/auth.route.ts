import {
  login,
  register,
  sendTargetEmail,
} from "@/controllers/auth.controller.ts";
import { Router } from "express";

const router = Router();

// login
router.post("/login", login);

// register
router.post("/register", register);

// send target email
router.get("/target", sendTargetEmail);

export default router;
