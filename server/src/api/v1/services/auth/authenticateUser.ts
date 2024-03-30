import { getUser } from "./dbQueries";
import { AuthResults } from "../../interfaces/User";
import { AuthError } from "../../config/errorObjects";
import bcrypt from "bcrypt";

const authenticateUser = async (
  username: string,
  pwd: string,
  authKeys: AuthResults
): Promise<typeof matchingUser> | never => {
  const matchingUser = await getUser(authKeys.username, username);

  if (!matchingUser) {
    throw new AuthError(
      "Not Found",
      { details: `Username: ${username}, does not exist` },
      404
    );
  }
  if (!(await bcrypt.compare(pwd, matchingUser.password!))) {
    throw new AuthError(
      "Forbidden",
      { details: `Password: ${pwd} is incorrect` },
      403
    );
  }

  return matchingUser;
};

export default authenticateUser;
