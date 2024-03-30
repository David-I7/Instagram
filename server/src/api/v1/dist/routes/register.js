"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const registerUser_1 = __importDefault(require("../services/auth/registerUser"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const registerRouter = express_1.default.Router();
registerRouter.route("/").post((req, res) => {
    const { displayUsername, secondaryUsername, pwd, fullName } = req.body;
    const registerKeys = (0, validateCredentials_1.validateRegisterInput)(displayUsername, secondaryUsername, pwd, fullName);
    (0, registerUser_1.default)(displayUsername, secondaryUsername, pwd, registerKeys, fullName);
    return res.status(201).send(`User ${displayUsername} was created`);
});
registerRouter.use(errorHandler_1.default);
exports.default = registerRouter;
