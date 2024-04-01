"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const dbQueries_1 = require("../services/auth/dbQueries");
const jsonResponse_1 = require("../config/jsonResponse");
const validateRouter = (0, express_1.Router)();
validateRouter.post("/username", async (req, res) => {
    const { displayUsername, secondaryUsername } = req.body;
    if (!displayUsername && !secondaryUsername)
        return res
            .status(400)
            .json((0, jsonResponse_1.jsonFail)({ username: "No input was provided" }));
    if (displayUsername) {
        if (!(0, validateCredentials_1.validateDisplayUsername)(displayUsername))
            return res.status(400).json((0, jsonResponse_1.jsonFail)({ username: "Invalid Username" }));
        const duplicate = await (0, dbQueries_1.getUser)("username", displayUsername);
        duplicate
            ? res.status(409).json((0, jsonResponse_1.jsonFail)({
                username: `Username ${displayUsername} already exists`,
            }))
            : res.status(200).json((0, jsonResponse_1.jsonSuccess)());
        return;
    }
    let duplicate = null;
    if (secondaryUsername) {
        const result = (0, validateCredentials_1.validateSecondaryUsername)(secondaryUsername);
        if (typeof result === "string") {
            duplicate = await (0, dbQueries_1.getUser)(result, secondaryUsername);
        }
        else
            return res.status(400).json(result);
        duplicate
            ? res.status(409).json((0, jsonResponse_1.jsonFail)({
                secondaryUsername: `${result} ${secondaryUsername} already exists`,
            }))
            : res.status(200).json((0, jsonResponse_1.jsonSuccess)({ type: `${result}` }));
        return;
    }
    return;
});
exports.default = validateRouter;
