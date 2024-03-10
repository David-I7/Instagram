import express from "express";
import { UserAuth } from "../interfaces/User";

const authRouter = express.Router();

authRouter.route("/").post((req, res) => {
  const { username, pwd }: UserAuth = req.body;
  if (!username || !pwd) return res.sendStatus(400);
  // validate input

  return res.sendStatus(200);
});

export default authRouter;
