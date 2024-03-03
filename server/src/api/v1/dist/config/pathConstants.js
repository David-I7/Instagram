"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotenvFilepath = exports.clientIndex = exports.clientAssets = void 0;
const path_1 = __importDefault(require("path"));
exports.clientAssets = path_1.default.join(__dirname, "..", "..", "..", "..", "..", "client", "dist");
exports.clientIndex = path_1.default.join(__dirname, "..", "..", "..", "..", "..", "client", "dist", "index.html");
exports.dotenvFilepath = path_1.default.join(__dirname, "..", "..", "..", "..", "..", ".env");
