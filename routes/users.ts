// deno-lint-ignore-file
import express from "express";
import { deleteKV, getAllKV, getKV, saveKV } from "../dbkv/main.ts";
const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get("/", async function (req: any, res: any, next: any) {
  res.status(200).json(await getAllKV("users"));
});

usersRouter.get("/:id", async function (req: any, res: any, next: any) {
  res.status(200).json(await getKV("users", req.params.id));
});

usersRouter.post("/", async function (req: any, res: any, next: any) {
  // { firstName: string, lastName: string }
  res.status(200).json(await saveKV("users", req.body));
});

usersRouter.delete("/:id", async function (req: any, res: any, next: any) {
  res.status(200).json(await deleteKV("users", req.params.id));
});

export default usersRouter;
