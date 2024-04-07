"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbQueries_1 = require("../../services/auth/dbQueries");
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = async (displayUsername, secondaryUsername, pwd, registerKeys, birthday, roles, fullname) => {
    const hashedPwd = await bcrypt_1.default.hash(pwd, 10);
    const newUser = await (0, dbQueries_1.createUser)(displayUsername, registerKeys.secondaryUsername, secondaryUsername, hashedPwd, birthday, roles, fullname);
    return newUser;
};
exports.default = registerUser;
