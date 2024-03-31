"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbQueries_1 = require("./dbQueries");
const errorObjects_1 = require("../../config/errorObjects");
const bcrypt_1 = __importDefault(require("bcrypt"));
const authenticateUser = async (username, pwd, authKeys) => {
    const matchingUser = await (0, dbQueries_1.getUser)(authKeys.username, username);
    if (!matchingUser) {
        throw new errorObjects_1.AuthError("Not Found", { details: `Username: ${username}, does not exist` }, 404);
    }
    if (!(await bcrypt_1.default.compare(pwd, matchingUser.password))) {
        throw new errorObjects_1.AuthError("Forbidden", { details: `Password: ${pwd} is incorrect` }, 403);
    }
    return matchingUser;
};
exports.default = authenticateUser;
