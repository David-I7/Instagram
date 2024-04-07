import mongoose, { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import User from "../../models/User";

export type MongoUser = Awaited<ReturnType<typeof getUser>>;

export interface mongoUser extends mongoose.Document {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  birthday: Date;
  roles: Record<string, number>;
  fullName?: string;
  refreshToken?: string;
  picture?: string;
}

export const getUser = (fieldName: string, user: string) => {
  return User.findOne({ [fieldName]: user });
};

export const createUser = (
  displayUsername: string,
  secondaryUsernameKey: string,
  secondaryUsername: string,
  pwd: string,
  birthday: Date,
  roles: Record<string, number>,
  fullName?: string
) => {
  return User.create({
    username: displayUsername,
    [secondaryUsernameKey]: secondaryUsername,
    password: pwd,
    birthday,
    fullName,
    roles,
  });
};

export const findAndUpdateOne = (
  filter: FilterQuery<mongoUser>,
  update: UpdateQuery<mongoUser>,
  options: QueryOptions = {}
) => {
  return User.findOneAndUpdate(filter, update, options);
};
