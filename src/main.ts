import type { Request, Response, Express } from "express";
import express from "express";

import AuthRouter from "@/routes/auth.route.ts";

const app: Express = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", AuthRouter);

app.listen(PORT, () => {
  console.log("API Server is running on port 3000");
});
