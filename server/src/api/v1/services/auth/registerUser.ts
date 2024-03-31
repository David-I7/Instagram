import { RegisterResults } from "../../interfaces/User";
import { createUser } from "../../services/auth/dbQueries";

const registerUser = (
  displayUsername: string,
  secondaryUsername: string,
  pwd: string,
  registerKeys: RegisterResults,
  birthday: Date,
  fullname?: string
) => {
  createUser(
    displayUsername,
    registerKeys.secondaryUsername,
    secondaryUsername,
    pwd,
    birthday,
    fullname
  );
};

export default registerUser;
