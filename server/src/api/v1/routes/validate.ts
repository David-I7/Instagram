import { Router, Request, Response } from "express";
import {
  validateDisplayUsername,
  validateSecondaryUsername,
} from "../validation/authentication/validateCredentials";
import { getUser } from "../services/auth/dbQueries";
import { jsonFail, jsonSuccess } from "../config/jsonResponse";

const validateRouter = Router();

validateRouter.post("/username", async (req: Request, res: Response) => {
  const { displayUsername, secondaryUsername } = req.body;

  if (!displayUsername && !secondaryUsername)
    return res
      .status(400)
      .json(jsonFail({ data: { username: "No input was provided" } }));

  // validate Input
  if (displayUsername) {
    if (!validateDisplayUsername(displayUsername))
      return res
        .status(400)
        .json(jsonFail({ data: { username: "Invalid Username" } }));
    const duplicate = await getUser("username", displayUsername);
    console.log(duplicate);

    duplicate
      ? res
          .status(409)
          .json(
            jsonFail({
              data: {
                username: `Username: ${displayUsername}, already exists`,
              },
            })
          )
      : res.status(200).json(jsonSuccess({ data: null }));

    return;
  }

  let duplicate: Awaited<ReturnType<typeof getUser>> = null;
  if (secondaryUsername) {
    const result = validateSecondaryUsername(secondaryUsername);

    if (typeof result === "string") {
      duplicate = await getUser(result, secondaryUsername);
    } else return res.status(400).json(result);

    duplicate
      ? res
          .status(409)
          .json(
            jsonFail({
              data: {
                secondaryUsername: `${result}: ${secondaryUsername}, already exists`,
              },
            })
          )
      : res.status(200).json(jsonSuccess({ data: null }));

    return;
  }
});
