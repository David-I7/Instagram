"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
authRouter.route("/").post((req, res) => {
    const username = req.body.username;
    const { pwd } = req.body;
    if (!username || !pwd)
        return res.sendStatus(400);
    return res.sendStatus(200);
});
exports.default = authRouter;
