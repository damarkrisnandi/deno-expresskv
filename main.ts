// @deno-types="npm:@types/express@4"
// import express, { NextFunction, Request, Response } from "express";
import express from "express";
// @deno-types="npm:@types/cors@^2.8.17"
import cors from "cors"
import mainRouter from "./routes/index.ts";
import usersRouter from "./routes/users.ts";

const app = express();
const port = Number(Deno.env.get("PORT")) || 3000;

app.use(express.json());

app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use(cors);

app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});

export default app;
