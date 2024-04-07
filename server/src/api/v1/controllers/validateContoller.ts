import {
  validateDisplayUsername,
  validateSecondaryUsername,
} from "../validation/authentication/validateCredentials";
import { jsonError, jsonFail, jsonSuccess } from "../config/jsonResponse";
import { NextFunction, Request, Response } from "express";
import { duplicateUsername } from "../validation/authentication/authDuplication";
import { sendVerificationEmail } from "../services/emails";

type ValidateContoller = Record<string, any>;

const handleUsername = async (req: Request, res: Response) => {
  const { displayUsername, secondaryUsername } = req.body;

  if (!displayUsername && !secondaryUsername)
    return res
      .status(400)
      .json(jsonFail({ username: "No input was provided" }));

  // validate Input
  if (displayUsername) {
    if (!validateDisplayUsername(displayUsername))
      return res
        .status(200)
        .json(jsonFail({ isValid: false, duplicate: false }));

    //null if no user matches
    (await duplicateUsername("username", displayUsername))
      ? res.status(200).json(
          jsonFail({
            isValid: false,
            duplicate: true,
          })
        )
      : res.status(200).json(jsonSuccess({ isValid: true, duplicate: false }));

    return;
  }

  if (secondaryUsername) {
    const result = validateSecondaryUsername(secondaryUsername);

    if (typeof result === "string") {
      (await duplicateUsername(result, secondaryUsername))
        ? res.status(200).json(
            jsonFail({
              isValid: false,
              duplicate: true,
              usernameType: `${result}`,
            })
          )
        : res.status(200).json(
            jsonSuccess({
              isValid: true,
              usernameType: `${result}`,
              duplicate: false,
            })
          );
    } else
      return res
        .status(200)
        .json(jsonFail({ isValid: false, duplicate: false }));

    return;
  }
  return;
};

const handleEmail = async (req: Request, res: Response, next: NextFunction) => {
  const emailTo = req.body.to;

  if (!emailTo)
    return res
      .status(400)
      .json(jsonFail({ to: "Did not provide a destination address" }));

  let verificationCode = "";
  try {
    verificationCode = await sendVerificationEmail(emailTo);
  } catch (err: unknown) {
    return res.status(500).json(err);
  }

  return res.status(200).json(jsonSuccess({ verificationCode }));
};

const handlePhoneNumber = (req: Request, res: Response) => {
  return res
    .status(501)
    .json(
      jsonError(
        new Error(
          "Phone number confirmation not implememnted, use email instead."
        )
      )
    );
};

const validateContoller: ValidateContoller = {
  handleUsername,
  handleEmail,
  handlePhoneNumber,
};

export default validateContoller;
