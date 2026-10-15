import { login, register } from "@/controllers/auth.controller.js";
import { Router } from "express";

const router = Router();

// login
router.post("/login", login);

// register
router.post("/register", register);

export default router;
