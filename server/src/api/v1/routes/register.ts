import express from "express";
import {UserRegister} from "../interfaces/User";
import {validateRegisterInput} from '../validation/authentication/validateCredentials'

const registerRouter = express.Router();

registerRouter.route("/").post((req, res) => {
  const { displayUsername, secondaryUsername, pwd, fullName }: UserRegister = req.body;
  //validation
  const results = validateRegisterInput({pwd, fullName, secondaryUsername, displayUsername})
  if (!results.secondaryUsername || !results.pwd || !results.displayUsername) res.send(400)
  // check for duplicates

});

export default registerRouter;
