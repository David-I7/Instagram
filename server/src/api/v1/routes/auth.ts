import express from "express";
import { UserAuth } from "../interfaces/User";
const authRouter = express.Router();

authRouter.route("/").post((req, res) => {
  const { username, pwd }: UserAuth = req.body;
  // check if user is in database
  

  //

  return res.sendStatus(200);
});

export default authRouter;
