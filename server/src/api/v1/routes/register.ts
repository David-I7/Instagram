import express from "express";
import { RegisterKeys, UserRegister } from "../interfaces/User";
import { validateRegisterInput } from "../validation/authentication/validateCredentials";
import registerUser from "../services/auth/registerUser";
import errorHandler from "../middlewares/errorHandler";
import { JSONFail, jsonSuccess } from "../config/jsonResponse";

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
  const vResults = validateRegisterInput(
    displayUsername,
    secondaryUsername,
    pwd,
    fullName
  );

  if ((vResults as JSONFail).status) return res.status(400).json(vResults);

  //Register new user
  const newUser = registerUser(
    displayUsername,
    secondaryUsername,
    pwd,
    vResults as RegisterKeys,
    birthday,
    fullName
  );

  return res.status(201).json(jsonSuccess({ data: { user: newUser } }));
});

registerRouter.use(errorHandler);

export default registerRouter;
