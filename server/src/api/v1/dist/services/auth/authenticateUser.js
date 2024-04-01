"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbQueries_1 = require("./dbQueries");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonResponse_1 = require("../../config/jsonResponse");
const authenticateUser = async (username, pwd, authKeys) => {
    const matchingUser = await (0, dbQueries_1.getUser)(authKeys.username, username);
    if (!matchingUser) {
        return (0, jsonResponse_1.jsonFail)({
            username: `Username: ${username}, is not associated with an account`,
        });
    }
    if (!(await bcrypt_1.default.compare(pwd, matchingUser.password))) {
        return (0, jsonResponse_1.jsonFail)({ username: `Incorrect Password` });
    }
    return matchingUser;
};
exports.default = authenticateUser;
