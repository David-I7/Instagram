"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const pathConstants_1 = require("../../config/pathConstants");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: pathConstants_1.dotenvFilepath });
const createJWT = async (mongoUser, userRoles) => {
    const refreshToken = jsonwebtoken_1.default.sign({
        userInfo: {
            username: mongoUser.username,
        },
    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1y" });
    const roleValues = Object.values(userRoles);
    const accessToken = jsonwebtoken_1.default.sign({
        userInfo: {
            username: mongoUser.username,
            roles: roleValues,
        },
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
    mongoUser.refreshToken = refreshToken;
    await mongoUser.save();
    return { refreshToken, accessToken };
};
exports.default = createJWT;
