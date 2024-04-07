"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonResponse_1 = require("../config/jsonResponse");
const dbQueries_1 = require("../services/auth/dbQueries");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const pathConstants_1 = require("../config/pathConstants");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: pathConstants_1.dotenvFilepath });
const refreshTokenController = async (req, res) => {
    const refreshToken = req.cookies.JWT;
    if (!refreshToken)
        return res
            .status(401)
            .json((0, jsonResponse_1.jsonFail)({ refreshToken: "No refresh token was provided" }));
    const mongoUser = await (0, dbQueries_1.getUser)("refreshToken", refreshToken);
    if (!mongoUser)
        return res
            .send(403)
            .json({ refreshToken: "Refresh token does not match any user" });
    jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err)
            return res.status(403).json((0, jsonResponse_1.jsonError)(err));
        const accessToken = jsonwebtoken_1.default.sign({
            userInfo: mongoUser.username,
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1m",
        });
        return res.status(201).json((0, jsonResponse_1.jsonSuccess)({ accessToken }));
    });
    return;
};
exports.default = refreshTokenController;
