"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pathConstants_1 = require("./pathConstants");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: pathConstants_1.dotenvFilepath,
});
