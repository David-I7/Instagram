import { Request, Response, NextFunction } from "express";
import { reqUser } from "../interfaces/User";
import { jsonFail } from "../config/jsonResponse";

const verifyRoles = (...authorizedRoles: number[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const roles = (req.user as reqUser).roles;

    if (!roles)
      return res
        .status(401)
        .json(
          jsonFail({ accessToken: "No access token provided, try logging in." })
        );

    const hasAccess = roles
      ?.map((role: number) => {
        return authorizedRoles.includes(role);
      })
      .includes(true)
      ? true
      : false;

    if (hasAccess) return next();

    return res
      .status(403)
      .json({ roles: `Required roles are: ${authorizedRoles.join(", ")}` });
  };
};

export default verifyRoles;
