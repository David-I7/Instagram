import { getUser } from "./dbQueries";
import { AuthKeys } from "../../interfaces/User";
import bcrypt from "bcrypt";
import { jsonFail, JSONFail } from "../../config/jsonResponse";

const authenticateUser = async (
  username: string,
  pwd: string,
  authKeys: AuthKeys
): Promise<typeof matchingUser | JSONFail> => {
  const matchingUser = await getUser(authKeys.username, username);

  if (!matchingUser) {
    return jsonFail({
      data: {
        username: `Username: ${username}, is not associated with an account`,
      },
    });
  }
  if (!(await bcrypt.compare(pwd, matchingUser.password!))) {
    return jsonFail({ data: { username: `Incorrect Password` } });
  }

  return matchingUser;
};

export default authenticateUser;
