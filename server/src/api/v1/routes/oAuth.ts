import { Request, Response, Router } from "express";
import { getGoogleOAuthTokens } from "../helpers/oAuth";
import { jsonError, jsonFail, jsonSuccess } from "../config/jsonResponse";
import jwt from "jsonwebtoken";
import { findAndUpdateOne } from "../services/auth/dbQueries";
import createJWT from "../services/auth/createJWT";
import { newUserRoles } from "../config/roles";
import { authCookieOptions } from "../config/cookieOptions";
// import passport from "passport";

const oAuthRouter = Router();

// oAuthRouter.get("/google", (req: Request, res: Response) => {
//   console.log(req.method, req.url, req.headers.referer);
//   passport.authenticate("google", { scope: ["profile", "email"] });
// });

// oAuthRouter.get("/facebook/callback", (req: Request, res: Response) => {
//   console.log(req.method, req.url);
//   passport.authenticate("google", {
//     failureRedirect: "/google/fail",
//     successRedirect: "/google/success",
//   });
// });

// oAuthRouter.get("/google/success", (req, res) => {
//   res.sendStatus(200);
// });
// oAuthRouter.get("/google/fail", (req, res) => {
//   res.sendStatus(403);
// });

oAuthRouter.get("/google/callback", async (req: Request, res: Response) => {
  //get the code from IdP (can be used for SSO Apps)
  const code = req.query.code as string;

  if (!code)
    return res
      .status(401)
      .json(jsonFail({ message: "IdP Consent code required" }));

  try {
    const { id_token } = await getGoogleOAuthTokens(code);

    // get user with tokens
    const googleUser = jwt.decode(id_token) as jwt.JwtPayload;

    if (!googleUser.email_verified)
      return res
        .status(403)
        .json(jsonFail({ message: "Google account is not verified" }));

    // upsert the user
    const user = await findAndUpdateOne(
      { email: googleUser.email },
      {
        email: googleUser.email,
        username: googleUser.given_name,
        picture: googleUser.picture,
        fullName: googleUser.name,
        roles: newUserRoles,
      },
      {
        upsert: true,
        new: true,
      }
    );

    // create a jwt

    const { refreshToken, accessToken } = await createJWT(user, user?.roles);

    res.cookie("JWT", refreshToken, authCookieOptions);

    // redirect back to the client
    return res.status(200).json(jsonSuccess({ accessToken }));
  } catch (err: any) {
    return res.status(500).json(jsonError(err as Error));
  }
});

export default oAuthRouter;

// IMPLEMENT LOGOUT FEATURE INSIDE REDIRECT VIEW (AKA HOME)
