import { AuthKeys, UserAuth } from "../interfaces/User";
import { validateAuthInput } from "../validation/authentication/validateCredentials";
import authenticateUser from "../services/auth/authenticateUser";
import { jsonSuccess, JSONFail } from "../config/jsonResponse";
import { NextFunction, Request, Response } from "express";

const authController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, pwd }: UserAuth = req.body;
  //validate input
  const vResults = validateAuthInput(username, pwd);

  if ((vResults as JSONFail).status) return res.status(400).json(vResults);

  // authenticate user
  const match = await authenticateUser(username, pwd, vResults as AuthKeys);

  if ((match as JSONFail).status) return res.status(403).json(match);

  //successfull autentication
  return res.status(200).json(jsonSuccess({ data: { user: match } }));
};

export default authController;
