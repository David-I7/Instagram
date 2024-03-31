import User from "../../models/User";

export const getUser = (fieldName: string, user: string) => {
  return User.findOne({ [fieldName]: user });
};

export const createUser = async (
  displayUsername: string,
  secondaryUsernameKey: string,
  secondaryUsername: string,
  pwd: string,
  birthday: Date,
  fullName?: string
) => {
  await User.create({
    username: displayUsername,
    [secondaryUsernameKey]: secondaryUsername,
    password: pwd,
    birthday: birthday,
    fullname: fullName,
  });
};
