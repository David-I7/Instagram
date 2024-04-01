import { Request, Response, NextFunction } from "express";
import { AuthError } from "../config/errorObjects";
import { jsonError } from "../config/jsonResponse";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) return res.send(500).json(jsonError(err));

  return;
};

export default errorHandler;
