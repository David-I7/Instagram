"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonResponse_1 = require("../config/jsonResponse");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const pathConstants_1 = require("../config/pathConstants");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: pathConstants_1.dotenvFilepath });
const verifyJWT = (req, res, next) => {
    const bearerToken = req.headers["authorization"];
    if (!bearerToken)
        return res.status(401).json((0, jsonResponse_1.jsonFail)({
            bearerToken: "BEARER token is not present in the req header",
        }));
    const accessToken = bearerToken?.split(" ")[1];
    jsonwebtoken_1.default.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err)
            return res.status(403).json((0, jsonResponse_1.jsonError)(err));
        req.body.username = decoded.userInfo.usernames;
        req.body.roles = decoded.userInfo.roles;
        return;
    });
    next();
    return;
};
exports.default = verifyJWT;
