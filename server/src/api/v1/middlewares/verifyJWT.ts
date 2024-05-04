import { Request, Response, NextFunction } from "express";
import { jsonError, jsonFail } from "../config/jsonResponse";
import jwt, { JwtPayload } from "jsonwebtoken";
import { dotenvFilepath } from "../config/pathConstants";
import dotenv from "dotenv";
dotenv.config({ path: dotenvFilepath });

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const bearerToken = req.headers["authorization"];

  if (!bearerToken)
    return res.status(401).json(
      jsonFail({
        bearerToken: "BEARER token is not present in the req header",
      })
    );

  const accessToken = bearerToken?.split(" ")[1]!;

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!, (err, decoded) => {
    if (err) return res.status(403).json(jsonError(err));

    req.user = {
      username: (decoded as JwtPayload).userInfo.username,
      roles: (decoded as JwtPayload).userInfo.roles,
    };

    return;
  });
  next();
  return;
  // need to return even if you call next !
};

export default verifyJWT;
