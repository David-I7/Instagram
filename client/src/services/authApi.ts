import { REGISTER, VALIDATE_USERNAME, VALIDATE } from "../constants/urls";

export const registerUser = async (
  requestInit: RequestInit,
  URL = REGISTER
) => {
  try {
    const response = await fetch(URL, requestInit);
    response.json();
  } catch (err: unknown) {
    console.log(err);
  }
};

export const validateUsername = async (
  propName: "secondaryUsername" | "username",
  value: string
) => {
  try {
    const response = await fetch(VALIDATE_USERNAME, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [propName]: value }),
    });
    const jsonData = await response.json();

    return jsonData.data;
  } catch (err: unknown) {
    return null;
  }
};

export const getVerificationCode = async (
  secondaryUsername: string,
  secondaryUsernameType: string
) => {
  const verificationOptions: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ to: secondaryUsername }),
  };

  const response = await fetch(
    `${VALIDATE + "/" + secondaryUsernameType}`,
    verificationOptions
  );

  const jsonResponse = await response.json();

  return jsonResponse.data.verificationCode as Number;
};
