import { AuthKeys, RegisterKeys } from "../../interfaces/User";
import { jsonFail, JSONFail } from "../../config/jsonResponse";

const validatePhoneNumber = (phoneNumber: string): boolean => {
  const regex = new RegExp(/^(\+\d{1,2})? ?\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/);
  return regex.test(phoneNumber);
};

const validateFullName = (fullName: string): boolean => {
  const regex = new RegExp(
    "^[a-zA-Z]{2,20} [a-zA-Z]{2,20}(-| )?([a-zA-Z]{2,20})?$"
  );
  return regex.test(fullName);
};

const validatePwd = (pwd: string): boolean => {
  const regex = new RegExp(/^(?=.*[a-zA-Z]).{8,64}$/);
  return regex.test(pwd);
};

const validateEmail = (email: string): boolean => {
  const regex = new RegExp(/^\w[\w+-~!%/\\]+@\w+.[a-z]{2,4}$/, "i");
  return regex.test(email);
};

const validateDisplayUsername = (displayUsername: string): boolean => {
  const regex = new RegExp(/^\w{2,16}$/);
  return regex.test(displayUsername);
};

const validateUsername = (username: string): JSONFail | string => {
  let validUsername: string = "";
  if (validateDisplayUsername(username)) {
    validUsername = "displayUsername";
  } else if (validateEmail(username)) {
    validUsername = "email";
  } else if (validatePhoneNumber(username)) {
    validUsername = "PhoneNumber";
  }

  if (validUsername) return validUsername;
  else return jsonFail({ username: "Invalid Username" });
};

export const validateSecondaryUsername = (
  secondaryUsername: string
): string | JSONFail => {
  if (validateEmail(secondaryUsername)) return "email";
  if (validatePhoneNumber(secondaryUsername)) return "phoneNumber";

  return jsonFail({ secondaryUsername: "Invalid Secondary Username" });
};

export const validateAuthInput = (
  username: string,
  pwd: string
): AuthKeys | JSONFail => {
  let results: AuthKeys = {
    username: "",
  };

  const vuResult = validateUsername(username);

  if (typeof vuResult === "string") {
    results.username = vuResult;
  } else {
    return vuResult;
  }

  if (validatePwd(pwd)) {
    return results;
  }

  return vuResult as unknown as JSONFail;
};

export const validateRegisterInput = (
  displayUsername: string,
  secondaryUsername: string,
  pwd: string,
  fullName?: string
): RegisterKeys | JSONFail => {
  let results: RegisterKeys = {
    secondaryUsername: "",
    displayUsername: "",
  };

  if (!validateDisplayUsername(displayUsername))
    return jsonFail({ username: "Invalid Username" });
  else results.displayUsername = "username";

  if (validateEmail(secondaryUsername)) results.secondaryUsername = "email";
  else if (validatePhoneNumber(secondaryUsername)) {
    results.secondaryUsername = "phoneNumber";
  } else return jsonFail({ secondaryUsername: "Invalid Secondary Username" });

  if (!validatePwd(pwd)) return jsonFail({ pwd: "Invalid Password" });

  if (fullName) {
    if (!validateFullName(fullName))
      return jsonFail({ fullName: "Invalid Full Name" });
  }
  return results;
};

export {
  validateDisplayUsername,
  validateEmail,
  validateFullName,
  validatePhoneNumber,
  validatePwd,
  validateUsername,
};
