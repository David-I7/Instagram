export const validatePhoneNumber = (PhoneNumber: string): boolean => {
  const regex = new RegExp(
    /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
  );
  return regex.test(PhoneNumber);
};

export const validateFullName = (fullName: string): boolean => {
  return new RegExp(
    /^[a-zA-Z]{2,20} [a-zA-Z]{2,20}(-| )?([a-zA-Z]{2,20})?$/
  ).test(fullName);
};

export const validateEmail = (email: string): boolean => {
  const regex = new RegExp(/^\w[\w+-~!%/\\]+@\w+.[a-z]{2,4}$/, "i");
  return regex.test(email);
};

export const validatePwd = (pwd: string): boolean => {
  return new RegExp(/^(?=.*[a-zA-Z])(?=.*[\d]).{8,64}$/).test(pwd);
};

export const validateDisplayUsername = (displayUsername: string): boolean => {
  const regex = new RegExp(/^\w{2,16}$/);
  return regex.test(displayUsername);
};

export const validateUsername = (username: string): boolean => {
  if (
    validateDisplayUsername(username) ||
    validateEmail(username) ||
    validatePhoneNumber(username)
  )
    return true;
  return false;
};
export const validateSecondaryUsername = (
  secondaryUsername: string
): boolean => {
  if (
    validateEmail(secondaryUsername) ||
    validatePhoneNumber(secondaryUsername)
  )
    return true;
  return false;
};
