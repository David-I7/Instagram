import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // match: /^[\w-]+@[a-zA-Z_]+.[a-zA-Z]{2,3}$/,
  },
  phoneNumber: {
    type: String,
  },
  birthday: {
    type: Date,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
