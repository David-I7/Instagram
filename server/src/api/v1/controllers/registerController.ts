import { RegisterKeys, UserRegister } from "../interfaces/User";
import { validateRegisterInput } from "../validation/authentication/validateCredentials";
import registerUser from "../services/auth/registerUser";
import { JSONFail, jsonSuccess, jsonFail } from "../config/jsonResponse";
import { duplicateUsername } from "../validation/authentication/authDuplication";
import { Request, Response, NextFunction } from "express";
import createJWT from "../services/auth/createJWT";
import { newUserRoles } from "../config/roles";
import { authCookieOptions } from "../config/cookieOptions";

const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    displayUsername,
    secondaryUsername,
    pwd,
    birthday,
    fullName,
  }: UserRegister = req.body;

  //check for all required props
  if (!displayUsername || !secondaryUsername || !birthday || !pwd) {
    return res.status(400).json(
      jsonFail({
        message: `displayUsername, secondaryUsername, pwd and birthday are required.`,
      })
    );
  }

  //validate Input
  const vResults = validateRegisterInput(
    displayUsername,
    secondaryUsername,
    pwd,
    fullName
  );

  if ((vResults as JSONFail).status) return res.status(400).json(vResults);

  //check for duplicates

  if (
    await duplicateUsername(
      (vResults as RegisterKeys).displayUsername,
      displayUsername
    )
  ) {
    return res.status(409).json(
      jsonFail({
        username: `Username ${displayUsername} already exists`,
      })
    );
  }
  if (
    await duplicateUsername(
      (vResults as RegisterKeys).secondaryUsername,
      secondaryUsername
    )
  ) {
    return res.status(409).json(
      jsonFail({
        secondaryUsername: `An account using the ${
          (vResults as RegisterKeys).secondaryUsername
        } ${secondaryUsername} already exists`,
      })
    );
  }

  //Register new user
  let newUser: Awaited<ReturnType<typeof registerUser>>;
  try {
    newUser = await registerUser(
      displayUsername,
      secondaryUsername,
      pwd,
      vResults as RegisterKeys,
      birthday,
      newUserRoles,
      fullName
    );
  } catch (err: unknown) {
    next(err);
    return;
  }

  //issue access and refresh tokens

  const { refreshToken, accessToken } = await createJWT(newUser, newUserRoles);

  res.cookie("JWT", refreshToken, authCookieOptions);

  return res.status(201).json(jsonSuccess({ accessToken }));
};

export default registerController;
