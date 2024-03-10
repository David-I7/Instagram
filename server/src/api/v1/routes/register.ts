import express from "express";
import User from "../interfaces/User";

const registerRouter = express.Router();

registerRouter.route("/").post((req, res) => {
  const { displayUsername, secondaryUsername, pwd }: User = req.body;
  if (!displayUsername || !secondaryUsername || !pwd) res.send(400); // fullName

  //validation
});

export default registerRouter;
