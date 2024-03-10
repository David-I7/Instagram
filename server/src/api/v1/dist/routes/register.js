"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerRouter = express_1.default.Router();
registerRouter.route("/").post((req, res) => {
    const { displayUsername, secondaryUsername, pwd } = req.body;
    if (!displayUsername || !secondaryUsername || !pwd)
        res.send(400);
});
exports.default = registerRouter;
