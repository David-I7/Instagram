"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const authenticateUser_1 = __importDefault(require("../services/auth/authenticateUser"));
const jsonResponse_1 = require("../config/jsonResponse");
const authController = async (req, res) => {
    const { username, pwd } = req.body;
    const vResults = (0, validateCredentials_1.validateAuthInput)(username, pwd);
    if (vResults.status)
        return res.status(400).json(vResults);
    const match = await (0, authenticateUser_1.default)(username, pwd, vResults);
    if (match.status)
        return res.status(403).json(match);
    return res.status(200).json((0, jsonResponse_1.jsonSuccess)({ user: match }));
};
exports.default = authController;
