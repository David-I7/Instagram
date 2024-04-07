import Jwt from "jsonwebtoken";
import { dotenvFilepath } from "../../config/pathConstants";
import dotenv from "dotenv";
import { MongoUser } from "../../services/auth/dbQueries";

dotenv.config({ path: dotenvFilepath });

const createJWT = async (
  mongoUser: MongoUser,
  userRoles: Record<string, number>
): Promise<{ refreshToken: string; accessToken: string }> => {
  //Should store info required to access new r tokens and auth/roles
  const refreshToken = Jwt.sign(
    {
      userInfo: {
        username: mongoUser!.username,
      },
    },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: "1y" }
  );

  const roleValues = Object.values(userRoles);

  const accessToken = Jwt.sign(
    {
      userInfo: {
        username: mongoUser!.username,
        roles: roleValues,
      },
    },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "15m" }
  );

  mongoUser!.refreshToken = refreshToken;
  await mongoUser!.save();

  return { refreshToken, accessToken };
};

export default createJWT;
