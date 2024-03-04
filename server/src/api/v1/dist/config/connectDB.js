"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const pathConstants_1 = require("./pathConstants");
dotenv_1.default.config({
    path: pathConstants_1.dotenvFilepath,
});
const connectDB = () => {
    try {
        mongoose_1.default.connect(process.env.DATABASE_URI);
    }
    catch (e) {
        console.log(e);
    }
};
exports.default = connectDB;
