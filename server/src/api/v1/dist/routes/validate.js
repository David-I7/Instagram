"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateContoller_1 = __importDefault(require("../controllers/validateContoller"));
const validateRouter = (0, express_1.Router)();
validateRouter.post("/username", validateContoller_1.default.handleUsername);
validateRouter.post("/email", validateContoller_1.default.handleEmail);
validateRouter.post("/phoneNumber", validateContoller_1.default.handlePhoneNumber);
exports.default = validateRouter;
