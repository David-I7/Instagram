import { Request, Response } from "express";
import { jsonError, jsonFail, jsonSuccess } from "../config/jsonResponse";
import { getUser, MongoUser } from "../services/auth/dbQueries";
import jwt from "jsonwebtoken";
import { dotenvFilepath } from "../config/pathConstants";
import dotenv from "dotenv";
dotenv.config({ path: dotenvFilepath });

const refreshTokenController = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.JWT;

  if (!refreshToken)
    return res
      .status(401)
      .json(jsonFail({ refreshToken: "No refresh token was provided" }));

  const mongoUser: MongoUser = await getUser("refreshToken", refreshToken);

  if (!mongoUser)
    return res
      .send(403)
      .json({ refreshToken: "Refresh token does not match any user" });

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET!,
    (
      err: jwt.VerifyErrors | null,
      decoded: string | jwt.JwtPayload | undefined
    ) => {
      if (err) return res.status(403).json(jsonError(err));

      const accessToken = jwt.sign(
        {
          userInfo: mongoUser.username,
        },
        process.env.ACCESS_TOKEN_SECRET!,
        {
          expiresIn: "1m",
        }
      );

      return res.status(201).json(jsonSuccess({ accessToken }));
    }
  );

  return;
};

export default refreshTokenController;
