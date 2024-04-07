"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const oAuth_1 = require("../helpers/oAuth");
const jsonResponse_1 = require("../config/jsonResponse");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dbQueries_1 = require("../services/auth/dbQueries");
const createJWT_1 = __importDefault(require("../services/auth/createJWT"));
const roles_1 = require("../config/roles");
const cookieOptions_1 = require("../config/cookieOptions");
const oAuthRouter = (0, express_1.Router)();
oAuthRouter.get("/google/callback", async (req, res) => {
    const code = req.query.code;
    if (!code)
        return res
            .status(401)
            .json((0, jsonResponse_1.jsonFail)({ message: "IdP Consent code required" }));
    try {
        const { id_token } = await (0, oAuth_1.getGoogleOAuthTokens)(code);
        const googleUser = jsonwebtoken_1.default.decode(id_token);
        if (!googleUser.email_verified)
            return res
                .status(403)
                .json((0, jsonResponse_1.jsonFail)({ message: "Google account is not verified" }));
        const user = await (0, dbQueries_1.findAndUpdateOne)({ email: googleUser.email }, {
            email: googleUser.email,
            username: googleUser.given_name,
            picture: googleUser.picture,
            fullName: googleUser.name,
            roles: roles_1.newUserRoles,
        }, {
            upsert: true,
            new: true,
        });
        const { refreshToken, accessToken } = await (0, createJWT_1.default)(user, user?.roles);
        res.cookie("JWT", refreshToken, cookieOptions_1.authCookieOptions);
        return res.status(200).json((0, jsonResponse_1.jsonSuccess)({ accessToken }));
    }
    catch (err) {
        return res.status(500).json((0, jsonResponse_1.jsonError)(err));
    }
});
exports.default = oAuthRouter;
