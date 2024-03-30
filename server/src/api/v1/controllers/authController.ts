import { AuthResults, UserAuth } from "../interfaces/User";
import { validateAuthInput } from "../validation/authentication/validateCredentials";
import authenticateUser from "../services/auth/authenticateUser";
import { AuthError } from "../config/errorObjects";
import { getJsonError, getJsonSuccess } from "../config/jsonResponse";
import { NextFunction, Request, Response } from "express";

const authController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, pwd }: UserAuth = req.body;
  //validate input
  let authKeys: AuthResults | undefined;
  try {
    authKeys = validateAuthInput(username, pwd);
  } catch (err: unknown) {
    if (err instanceof AuthError) {
      return res.status(err.status).json(getJsonError(err));
    }
  }

  // authenticate user
  let match: Awaited<ReturnType<typeof authenticateUser>> | undefined;
  try {
    match = await authenticateUser(username, pwd, authKeys!);
  } catch (err: unknown) {
    // failed autentication
    if (err instanceof AuthError) {
      return res.status(err.status).json(getJsonError(err));
    }
  }

  //successfull autentication
  return res.status(200).json(getJsonSuccess(200, { match }));
};

export default authController;
