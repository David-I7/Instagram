"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = void 0;
const User_1 = __importDefault(require("../../models/User"));
const getUser = (fieldName, user) => {
    return User_1.default.findOne({ [fieldName]: user });
};
exports.getUser = getUser;
const createUser = async (displayUsername, secondaryUsernameKey, secondaryUsername, pwd, birthday, fullName) => {
    await User_1.default.create({
        username: displayUsername,
        [secondaryUsernameKey]: secondaryUsername,
        password: pwd,
        birthday: birthday,
        fullname: fullName,
    });
};
exports.createUser = createUser;
