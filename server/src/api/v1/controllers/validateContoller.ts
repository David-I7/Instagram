import {
  validateDisplayUsername,
  validateSecondaryUsername,
} from "../validation/authentication/validateCredentials";
import { getUser } from "../services/auth/dbQueries";
import { jsonFail, jsonSuccess } from "../config/jsonResponse";
import { Request, Response } from "express";

type ValidateContoller = {
  [key: string]: Function;
};

const handleUsername = async (req: Request, res: Response) => {
  const { displayUsername, secondaryUsername } = req.body;

  if (!displayUsername && !secondaryUsername)
    return res
      .status(400)
      .json(jsonFail({ username: "No input was provided" }));

  // validate Input
  if (displayUsername) {
    if (!validateDisplayUsername(displayUsername))
      return res.status(400).json(jsonFail({ username: "Invalid Username" }));
    const duplicate = await getUser("username", displayUsername); //null if no user matches

    duplicate
      ? res.status(409).json(
          jsonFail({
            username: `Username ${displayUsername} already exists`,
          })
        )
      : res.status(200).json(jsonSuccess());

    return;
  }

  let duplicate: Awaited<ReturnType<typeof getUser>> = null;
  if (secondaryUsername) {
    const result = validateSecondaryUsername(secondaryUsername);

    if (typeof result === "string") {
      duplicate = await getUser(result, secondaryUsername);
    } else return res.status(400).json(result);

    duplicate
      ? res.status(409).json(
          jsonFail({
            secondaryUsername: `${result} ${secondaryUsername} already exists`,
          })
        )
      : res.status(200).json(jsonSuccess({ type: `${result}` }));

    return;
  }
  return;
};

const validateContoller: ValidateContoller = { handleUsername };

export default validateContoller;
