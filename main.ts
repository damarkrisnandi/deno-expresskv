// @deno-types="npm:@types/express@4"
// import express, { NextFunction, Request, Response } from "express";
import express from "express";
import mainRouter from "./routes/index.ts";
import usersRouter from "./routes/users.ts";

const app = express();
const port = Number(Deno.env.get("PORT")) || 3000;

app.use(express.json());

app.use("/", mainRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});

export default app;
