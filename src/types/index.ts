import type { Response, Request, NextFunction } from "express";
export type FnProps = {
  (req: Request, res: Response, next: NextFunction): Promise<any>;
};
