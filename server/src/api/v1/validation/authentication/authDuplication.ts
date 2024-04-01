import { getUser } from "../../services/auth/dbQueries";

export const duplicateUsername = async (
  fieldName: string,
  username: string
): Promise<boolean> => {
  const duplicate = await getUser(fieldName, username);

  return duplicate ? true : false;
};
