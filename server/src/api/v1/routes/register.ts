import express from "express";
import { UserRegister } from "../interfaces/User";
import { validateRegisterInput } from "../validation/authentication/validateCredentials";
import registerUser from "../services/auth/registerUser";
import errorHandler from "../middlewares/errorHandler";

const registerRouter = express.Router();

//thrown exceptions only get caught in synchronous fn's
registerRouter.route("/").post((req, res) => {
  const { displayUsername, secondaryUsername, pwd, fullName }: UserRegister =
    req.body;
  //validate Input
  const registerKeys = validateRegisterInput(
    displayUsername,
    secondaryUsername,
    pwd,
    fullName
  );

  //Register new user
  registerUser(displayUsername, secondaryUsername, pwd, registerKeys, fullName);

  return res.status(201).send(`User ${displayUsername} was created`);
});

registerRouter.use(errorHandler);

export default registerRouter;
