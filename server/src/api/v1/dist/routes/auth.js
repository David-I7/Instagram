"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controllers/authController"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const authRouter = express_1.default.Router();
authRouter.route("/").post(authController_1.default);
authRouter.use(errorHandler_1.default);
exports.default = authRouter;
