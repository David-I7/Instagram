import express from "express";
import { UserRegister } from "../interfaces/User";
import { validateRegisterInput } from "../validation/authentication/validateCredentials";
import registerUser from "../services/auth/registerUser";
import errorHandler from "../middlewares/errorHandler";

const registerRouter = express.Router();

//thrown exceptions only get caught in synchronous fn's
registerRouter.route("/").post((req, res) => {
  const {
    displayUsername,
    secondaryUsername,
    pwd,
    birthday,
    fullName,
  }: UserRegister = req.body;
  //validate Input
  const registerKeys = validateRegisterInput(
    displayUsername,
    secondaryUsername,
    pwd,
    fullName
  );

  //Register new user
  registerUser(
    displayUsername,
    secondaryUsername,
    pwd,
    registerKeys,
    birthday,
    fullName
  );

  return res
    .status(201)
    .json({
      success: true,
      message: `User ${displayUsername} was created`,
      data: { displayUsername, secondaryUsername, fullName, birthday },
    });
});

registerRouter.use(errorHandler);

export default registerRouter;
