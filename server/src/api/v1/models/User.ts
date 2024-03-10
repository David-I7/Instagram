import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+@[a-zA-Z_]+.[a-zA-Z]{2,3}$/,
  },
  birthday: {
    type: Date,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 80,
  },
  refreshToken: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
