"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerController_1 = __importDefault(require("../controllers/registerController"));
const errorHandler_1 = __importDefault(require("../middlewares/errorHandler"));
const registerRouter = express_1.default.Router();
registerRouter.route("/").post(registerController_1.default);
registerRouter.use(errorHandler_1.default);
exports.default = registerRouter;
