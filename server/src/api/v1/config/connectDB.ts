import mongoose from "mongoose";
import dotenv from "dotenv";
import { dotenvFilepath } from "./pathConstants";

dotenv.config({
  path: dotenvFilepath,
});

const connectDB = () => {
  try {
    mongoose.connect(process.env.DATABASE_URI!);
  } catch (e) {
    console.log(e);
  }
};

export default connectDB;
