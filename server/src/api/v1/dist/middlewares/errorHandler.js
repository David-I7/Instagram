"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorObjects_1 = require("../config/errorObjects");
const errorHandler = (err, req, res, next) => {
    if (err instanceof errorObjects_1.AuthError) {
        console.log("hi,", err.message);
    }
    return res.status(500).send("uff");
};
exports.default = errorHandler;
