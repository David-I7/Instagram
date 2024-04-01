import { Request, Response, NextFunction } from "express";
import { jsonError } from "../config/jsonResponse";
import { MongooseError } from "mongoose";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof MongooseError)
    return res
      .status(500)
      .json({ status: "error", message: "A database error has occurred" });
  if (err instanceof Error) return res.status(500).json(jsonError(err));

  return;
};

export default errorHandler;
