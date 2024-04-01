"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const registerUser_1 = __importDefault(require("../services/auth/registerUser"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const jsonResponse_1 = require("../config/jsonResponse");
const authDuplication_1 = require("../validation/authentication/authDuplication");
const registerRouter = express_1.default.Router();
registerRouter.route("/").post(async (req, res, next) => {
    const { displayUsername, secondaryUsername, pwd, birthday, fullName, } = req.body;
    if (!displayUsername || !secondaryUsername || !birthday || !pwd) {
        console.log(Object.getOwnPropertyNames(req.body));
        return res
            .status(400)
            .json((0, jsonResponse_1.jsonFail)({ message: "Missing required form inputs" }));
    }
    const vResults = (0, validateCredentials_1.validateRegisterInput)(displayUsername, secondaryUsername, pwd, fullName);
    if (vResults.status)
        return res.status(400).json(vResults);
    if (await (0, authDuplication_1.duplicateUsername)("username", displayUsername)) {
        return res.status(409).json((0, jsonResponse_1.jsonFail)({
            username: `Username ${displayUsername} already exists`,
        }));
    }
    if (await (0, authDuplication_1.duplicateUsername)("secondaryUsername", secondaryUsername)) {
        return res.status(409).json((0, jsonResponse_1.jsonFail)({
            secondaryUsername: `An account using ${secondaryUsername} already exists`,
        }));
    }
    let newUser;
    try {
        newUser = await (0, registerUser_1.default)(displayUsername, secondaryUsername, pwd, vResults, birthday, fullName);
    }
    catch (err) {
        next(err);
        return;
    }
    return res.status(201).json((0, jsonResponse_1.jsonSuccess)({ user: newUser }));
});
registerRouter.use(errorHandler_1.default);
exports.default = registerRouter;
