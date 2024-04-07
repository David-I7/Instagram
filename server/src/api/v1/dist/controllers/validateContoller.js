"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const jsonResponse_1 = require("../config/jsonResponse");
const authDuplication_1 = require("../validation/authentication/authDuplication");
const emails_1 = require("../services/emails");
const handleUsername = async (req, res) => {
    const { displayUsername, secondaryUsername } = req.body;
    if (!displayUsername && !secondaryUsername)
        return res
            .status(400)
            .json((0, jsonResponse_1.jsonFail)({ username: "No input was provided" }));
    if (displayUsername) {
        if (!(0, validateCredentials_1.validateDisplayUsername)(displayUsername))
            return res
                .status(200)
                .json((0, jsonResponse_1.jsonFail)({ isValid: false, duplicate: false }));
        (await (0, authDuplication_1.duplicateUsername)("username", displayUsername))
            ? res.status(200).json((0, jsonResponse_1.jsonFail)({
                isValid: false,
                duplicate: true,
            }))
            : res.status(200).json((0, jsonResponse_1.jsonSuccess)({ isValid: true, duplicate: false }));
        return;
    }
    if (secondaryUsername) {
        const result = (0, validateCredentials_1.validateSecondaryUsername)(secondaryUsername);
        if (typeof result === "string") {
            (await (0, authDuplication_1.duplicateUsername)(result, secondaryUsername))
                ? res.status(200).json((0, jsonResponse_1.jsonFail)({
                    isValid: false,
                    duplicate: true,
                    usernameType: `${result}`,
                }))
                : res.status(200).json((0, jsonResponse_1.jsonSuccess)({
                    isValid: true,
                    usernameType: `${result}`,
                    duplicate: false,
                }));
        }
        else
            return res
                .status(200)
                .json((0, jsonResponse_1.jsonFail)({ isValid: false, duplicate: false }));
        return;
    }
    return;
};
const handleEmail = async (req, res, next) => {
    const emailTo = req.body.to;
    if (!emailTo)
        return res
            .status(400)
            .json((0, jsonResponse_1.jsonFail)({ to: "Did not provide a destination address" }));
    let verificationCode = "";
    try {
        verificationCode = await (0, emails_1.sendVerificationEmail)(emailTo);
    }
    catch (err) {
        return res.status(500).json(err);
    }
    return res.status(200).json((0, jsonResponse_1.jsonSuccess)({ verificationCode }));
};
const handlePhoneNumber = (req, res) => {
    return res
        .status(501)
        .json((0, jsonResponse_1.jsonError)(new Error("Phone number confirmation not implememnted, use email instead.")));
};
const validateContoller = {
    handleUsername,
    handleEmail,
    handlePhoneNumber,
};
exports.default = validateContoller;
