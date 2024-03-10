import {
  UserAuth,
  UserRegister,
  AuthResults,
  RegisterResults,
} from "../../interfaces/User";

const validatePhoneNumber = (PhoneNumber: string): boolean => {
  const regex = new RegExp("^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$");
  return regex.test(PhoneNumber);
};

const validateFullname = (fullName: string): boolean => {
  return new RegExp(
    "^[a-zA-Z]{2,20} [a-zA-Z]{2,20}(-| )?([a-zA-Z]{2,20})?$"
  ).test(fullName);
};

const validatePwd = (pwd: string): boolean => {
  return new RegExp(".{8,64}").test(pwd);
};

const validateEmail = (email: string): boolean => {
  const regex = new RegExp("^w[w+-~!%/\\]+@w+.[a-z]{2,4}$", "i");
  return regex.test(email);
};

const validateUsername = (username: string): boolean => {
  const regex = new RegExp("^.{2,16}$");
  return regex.test(username);
};

export const validateAuthInput = (user: UserAuth): AuthResults => {
  const results: AuthResults = {
    username: false,
    pwd: false,
  };
  if (
    validateUsername(user.username) ||
    validateEmail(user.username) ||
    validatePhoneNumber(user.username)
  )
    results.username = true;
  if (validatePwd(user.pwd)) results.pwd = true;

  return results;
};

export const validateRegisterInput = (user: UserRegister): RegisterResults => {
  const results: RegisterResults = {
    displayUsername: false,
    secondaryUsername: false,
    pwd: false,
  };

  if (validateUsername(user.displayUsername)) results.displayUsername = true;
  if (
    validateEmail(user.secondaryUsername) ||
    validatePhoneNumber(user.secondaryUsername)
  )
    results.secondaryUsername = true;
  if (validatePwd(user.pwd)) results.pwd = true;
  user.fullName
    ? validateFullname(user.fullName)
      ? (results.fullName = true)
      : ""
    : "";

  return results;
};
