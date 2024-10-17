// deno-lint-ignore-file
import express from "express";
const mainRouter = express.Router();

/* GET users listing. */
mainRouter.get("/", function (req: any, res: any, next: any) {
  console.log(req.url);
  res.status(200).json({ message: "hello from express and deno" });
});

export default mainRouter;
