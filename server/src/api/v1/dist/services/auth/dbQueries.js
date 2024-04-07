"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndUpdateOne = exports.createUser = exports.getUser = void 0;
const User_1 = __importDefault(require("../../models/User"));
const getUser = (fieldName, user) => {
    return User_1.default.findOne({ [fieldName]: user });
};
exports.getUser = getUser;
const createUser = (displayUsername, secondaryUsernameKey, secondaryUsername, pwd, birthday, roles, fullName) => {
    return User_1.default.create({
        username: displayUsername,
        [secondaryUsernameKey]: secondaryUsername,
        password: pwd,
        birthday,
        fullName,
        roles,
    });
};
exports.createUser = createUser;
const findAndUpdateOne = (filter, update, options = {}) => {
    return User_1.default.findOneAndUpdate(filter, update, options);
};
exports.findAndUpdateOne = findAndUpdateOne;
