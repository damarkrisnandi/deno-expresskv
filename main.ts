// deno-lint-ignore-file
// @deno-types="npm:@types/express@4"
// import express, { NextFunction, Request, Response } from "express";
import express, { Response } from "express";
// @deno-types="npm:@types/cors@^2.8.17"
import cors from "cors"
import mainRouter from "./routes/index.ts";
import usersRouter from "./routes/users.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = express();
const port = Number(Deno.env.get("PORT")) || 3000;

app.use(express.json());

app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use(oakCors({
  origin: "*",
}))
// set cors
app.use((req: any, res: Response) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});

export default app;
