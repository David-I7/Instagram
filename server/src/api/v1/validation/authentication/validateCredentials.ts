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

const validateFullName = (fullName: string): boolean => {
  return new RegExp(
    "^[a-zA-Z]{2,20} [a-zA-Z]{2,20}(-| )?([a-zA-Z]{2,20})?$"
  ).test(fullName);
};

const validatePwd = (pwd: string): boolean => {
  return new RegExp(/^(?=.*[a-zA-Z])(?=.*[\d]).{8,64}$/).test(pwd);
};

const validateEmail = (email: string): boolean => {
  const regex = new RegExp("^w[w+-~!%/\\]+@w+.[a-z]{2,4}$", "i");
  return regex.test(email);
};

const validateDisplayUsername = (displayUsername: string): boolean => {
  const regex = new RegExp(/^\w{2,16}$/);
  return regex.test(displayUsername);
};

const validateUsername = (username: string): boolean => {
  if (
    validateDisplayUsername(username) ||
    validateEmail(username) ||
    validatePhoneNumber(username)
  )
    return true;
  return false;
};

export const validateAuthInput = (user: UserAuth): AuthResults => {
  const results: AuthResults = {
    username: false,
    pwd: false,
  };
  if (validateUsername(user.username)) results.username = true;
  if (validatePwd(user.pwd)) results.pwd = true;

  return results;
};

export const validateRegisterInput = (user: UserRegister): RegisterResults => {
  const results: RegisterResults = {
    displayUsername: false,
    secondaryUsername: false,
    pwd: false,
  };

  if (validateDisplayUsername(user.displayUsername))
    results.displayUsername = true;
  if (
    validateEmail(user.secondaryUsername) ||
    validatePhoneNumber(user.secondaryUsername)
  )
    results.secondaryUsername = true;
  if (validatePwd(user.pwd)) results.pwd = true;
  user.fullName
    ? validateFullName(user.fullName)
      ? (results.fullName = true)
      : ""
    : "";

  return results;
};
