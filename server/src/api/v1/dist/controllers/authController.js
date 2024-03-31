"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const authenticateUser_1 = __importDefault(require("../services/auth/authenticateUser"));
const errorObjects_1 = require("../config/errorObjects");
const jsonResponse_1 = require("../config/jsonResponse");
const authController = async (req, res, next) => {
    const { username, pwd } = req.body;
    let authKeys;
    try {
        authKeys = (0, validateCredentials_1.validateAuthInput)(username, pwd);
    }
    catch (err) {
        if (err instanceof errorObjects_1.AuthError) {
            return res.status(err.status).json((0, jsonResponse_1.getJsonError)(err));
        }
    }
    let match;
    try {
        match = await (0, authenticateUser_1.default)(username, pwd, authKeys);
    }
    catch (err) {
        if (err instanceof errorObjects_1.AuthError) {
            return res.status(err.status).json((0, jsonResponse_1.getJsonError)(err));
        }
    }
    return res.status(200).json((0, jsonResponse_1.getJsonSuccess)(200, { match }));
};
exports.default = authController;
