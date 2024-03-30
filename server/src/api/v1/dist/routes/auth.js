"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateCredentials_1 = require("../validation/authentication/validateCredentials");
const authenticateUser_1 = __importDefault(require("../services/auth/authenticateUser"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const authRouter = express_1.default.Router();
authRouter.route("/").post(async (req, res, next) => {
    const { username, pwd } = req.body;
    const TestError = new Error("test");
    next(TestError);
    const authKeys = (0, validateCredentials_1.validateAuthInput)(username, pwd);
    const match = await (0, authenticateUser_1.default)(username, pwd, authKeys);
    if (match)
        return res.status(200).send(`Successfully logged in`);
    return res.status(401).send("Incorrect password");
});
authRouter.use(errorHandler_1.default);
exports.default = authRouter;
