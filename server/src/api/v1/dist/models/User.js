"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    birthday: {
        type: Date,
    },
    refreshToken: {
        type: String,
    },
    roles: {
        type: Object,
    },
    fullName: {
        type: String,
    },
    picture: {
        type: String,
    },
});
exports.default = mongoose_1.default.model("User", userSchema);
