"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const authenticateUser_1 = __importDefault(require("../services/auth/authenticateUser"));
const jsonResponse_1 = require("../config/jsonResponse");
const createJWT_1 = __importDefault(require("../services/auth/createJWT"));
const cookieOptions_1 = require("../config/cookieOptions");
const authController = async (req, res) => {
    const { username, pwd } = req.body;
    if (!username || !pwd)
        return res.status(400).json((0, jsonResponse_1.jsonFail)({
            messsage: "username and pwd are required.",
        }));
    const vResults = (0, validateCredentials_1.validateAuthInput)(username, pwd);
    if (vResults.status)
        return res.status(400).json(vResults);
    const match = await (0, authenticateUser_1.default)(username, pwd, vResults);
    if (match.status) {
        return res.status(403).json(match);
    }
    const { refreshToken, accessToken } = await (0, createJWT_1.default)(match, match?.roles);
    res.cookie("JWT", refreshToken, cookieOptions_1.authCookieOptions);
    return res.status(200).json((0, jsonResponse_1.jsonSuccess)({ accessToken }));
};
exports.default = authController;
