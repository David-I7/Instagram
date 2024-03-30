import { RegisterResults } from "../../interfaces/User";
import { createUser } from "../../services/auth/dbQueries";

const registerUser = (
  displayUsername: string,
  secondaryUsername: string,
  pwd: string,
  registerKeys: RegisterResults,
  fullname?: string
) => {
  createUser(
    displayUsername,
    registerKeys.secondaryUsername,
    secondaryUsername,
    pwd,
    fullname
  );
};

export default registerUser;
