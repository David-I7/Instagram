import { AuthKeys, UserAuth } from "../interfaces/User";
import { validateAuthInput } from "../validation/authentication/validateCredentials";
import authenticateUser from "../services/auth/authenticateUser";
import { jsonSuccess, JSONFail, jsonFail } from "../config/jsonResponse";
import { Request, Response } from "express";
import { MongoUser } from "../services/auth/dbQueries";
import createJWT from "../services/auth/createJWT";
import { authCookieOptions } from "../config/cookieOptions";

const authController = async (req: Request, res: Response) => {
  const { username, pwd }: UserAuth = req.body;

  //check for all required props
  if (!username || !pwd)
    return res.status(400).json(
      jsonFail({
        messsage: "username and pwd are required.",
      })
    );

  //validate input
  const vResults = validateAuthInput(username, pwd);

  if ((vResults as JSONFail).status) return res.status(400).json(vResults);

  // authenticate user
  const match = await authenticateUser(username, pwd, vResults as AuthKeys);

  if ((match as JSONFail).status) {
    return res.status(403).json(match);
  }

  const { refreshToken, accessToken } = await createJWT(
    match as MongoUser,
    (match as MongoUser)?.roles
  );

  res.cookie("JWT", refreshToken, authCookieOptions);

  //successfull autentication
  return res.status(200).json(jsonSuccess({ accessToken }));
};

export default authController;
