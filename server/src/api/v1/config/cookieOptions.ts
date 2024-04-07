import { CookieOptions } from "express";

export const authCookieOptions: CookieOptions = {
  maxAge: 1 * 365 * 7 * 24 * 60 * 60 * 1000, //1 year
  httpOnly: true,
  sameSite: "lax",
  secure: false,
  domain: "localhost",
};
