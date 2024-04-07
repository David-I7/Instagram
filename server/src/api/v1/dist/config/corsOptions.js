"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
];
const corsOptions = (0, cors_1.default)({
    origin(requestOrigin, callback) {
        if (allowedOrigins.includes(requestOrigin) || requestOrigin === undefined)
            callback(null, true);
        else
            callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
});
exports.default = corsOptions;
