import type { FnProps } from "@/types/index.js";
import type { NextFunction, Request, Response } from "express";

export const asyncHandler =
  (fn: FnProps) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
