import { AuthResults, RegisterResults } from "../../interfaces/User";
import { AuthError } from "../../config/errorObjects";

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

const validateUsername = (username: string): never | string => {
  let validUsername: string = "";
  if (validateDisplayUsername(username)) {
    validUsername = "displayUsername";
  } else if (validateEmail(username)) {
    validUsername = "email";
  } else if (validatePhoneNumber(username)) {
    validUsername = "PhoneNumber";
  }

  if (validUsername) return validUsername;
  else throw new AuthError("Bad Request", { details: "Invalid Username" }, 400);
};

export const validateAuthInput = (
  username: string,
  pwd: string
): AuthResults | never => {
  let results: AuthResults = {
    username: "",
    pwd: "",
  };
  results.username = validateUsername(username);

  if (validatePwd(pwd)) results.pwd = "password";
  else throw new AuthError("Bad Request", { details: "Invalid Password" }, 400);

  return results;
};

export const validateRegisterInput = (
  displayUsername: string,
  secondaryUsername: string,
  pwd: string,
  fullName?: string
): RegisterResults | never => {
  let results: RegisterResults = {
    displayUsername: "",
    secondaryUsername: "",
    pwd: "",
  };

  if (validateDisplayUsername(displayUsername))
    results.displayUsername = "displayUsername";
  else throw new AuthError("Bad Request", { details: "Invalid Username" }, 400);

  if (validateEmail(secondaryUsername)) results.secondaryUsername = "email";
  else if (validatePhoneNumber(secondaryUsername))
    results.secondaryUsername = "phoneNumber";
  else throw new AuthError("Bad Request", { details: "Invalid field" }, 400);

  if (validatePwd(pwd)) results.pwd = "password";
  else throw new AuthError("Bad Request", { details: "Invalid Password" }, 400);

  if (fullName) {
    if (validateFullName(fullName)) results.fullName = "fullName";
    else
      throw new AuthError("Bad Request", { details: "Invalid Full Name" }, 400);
  }
  return results;
};
