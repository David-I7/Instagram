import { RegisterKeys } from "../../interfaces/User";
import { createUser } from "../../services/auth/dbQueries";
import bcrypt from "bcrypt";

const registerUser = async (
  displayUsername: string,
  secondaryUsername: string,
  pwd: string,
  registerKeys: RegisterKeys,
  birthday: Date,
  fullname?: string
): ReturnType<typeof createUser> => {
  const hashedPwd = await bcrypt.hash(pwd, 10);

  const newUser = await createUser(
    displayUsername,
    registerKeys.secondaryUsername,
    secondaryUsername,
    hashedPwd,
    birthday,
    fullname
  );

  return newUser;
};

export default registerUser;
