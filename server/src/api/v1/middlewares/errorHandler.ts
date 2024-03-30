import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(500).send("An unknown error has occurred");
};

export default errorHandler;
