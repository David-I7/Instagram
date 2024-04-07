"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const registerUser_1 = __importDefault(require("../services/auth/registerUser"));
const jsonResponse_1 = require("../config/jsonResponse");
const authDuplication_1 = require("../validation/authentication/authDuplication");
const createJWT_1 = __importDefault(require("../services/auth/createJWT"));
const roles_1 = require("../config/roles");
const cookieOptions_1 = require("../config/cookieOptions");
const registerController = async (req, res, next) => {
    const { displayUsername, secondaryUsername, pwd, birthday, fullName, } = req.body;
    if (!displayUsername || !secondaryUsername || !birthday || !pwd) {
        return res.status(400).json((0, jsonResponse_1.jsonFail)({
            message: `displayUsername, secondaryUsername, pwd and birthday are required.`,
        }));
    }
    const vResults = (0, validateCredentials_1.validateRegisterInput)(displayUsername, secondaryUsername, pwd, fullName);
    if (vResults.status)
        return res.status(400).json(vResults);
    if (await (0, authDuplication_1.duplicateUsername)(vResults.displayUsername, displayUsername)) {
        return res.status(409).json((0, jsonResponse_1.jsonFail)({
            username: `Username ${displayUsername} already exists`,
        }));
    }
    if (await (0, authDuplication_1.duplicateUsername)(vResults.secondaryUsername, secondaryUsername)) {
        return res.status(409).json((0, jsonResponse_1.jsonFail)({
            secondaryUsername: `An account using the ${vResults.secondaryUsername} ${secondaryUsername} already exists`,
        }));
    }
    let newUser;
    try {
        newUser = await (0, registerUser_1.default)(displayUsername, secondaryUsername, pwd, vResults, birthday, roles_1.newUserRoles, fullName);
    }
    catch (err) {
        next(err);
        return;
    }
    const { refreshToken, accessToken } = await (0, createJWT_1.default)(newUser, roles_1.newUserRoles);
    res.cookie("JWT", refreshToken, cookieOptions_1.authCookieOptions);
    return res.status(201).json((0, jsonResponse_1.jsonSuccess)({ accessToken }));
};
exports.default = registerController;
