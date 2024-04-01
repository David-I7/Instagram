import { AuthKeys, UserAuth } from "../interfaces/User";
import { validateAuthInput } from "../validation/authentication/validateCredentials";
import authenticateUser from "../services/auth/authenticateUser";
import { jsonSuccess, JSONFail, jsonFail } from "../config/jsonResponse";
import { Request, Response } from "express";

const authController = async (req: Request, res: Response) => {
  const { username, pwd }: UserAuth = req.body;

  //check for all required props
  if (!username || !pwd)
    return res
      .status(400)
      .json(
        jsonFail({
          messsage: "Did not receive both required props: password, username",
        })
      );

  //validate input
  const vResults = validateAuthInput(username, pwd);

  if ((vResults as JSONFail).status) return res.status(400).json(vResults);

  // authenticate user
  const match = await authenticateUser(username, pwd, vResults as AuthKeys);

  if ((match as JSONFail).status) return res.status(403).json(match);

  //successfull autentication
  return res.status(200).json(jsonSuccess({ user: match }));
};

export default authController;
