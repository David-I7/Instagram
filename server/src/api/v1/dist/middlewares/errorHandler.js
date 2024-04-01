"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorObjects_1 = require("../config/errorObjects");
const errorHandler = (err, req, res, next) => {
    console.log(typeof err);
    if (err instanceof errorObjects_1.AuthError) {
        return res
            .status(err.status)
            .json({ message: err.message, details: err.data.details });
    }
    if (err instanceof Error)
        return res.send(500).json({ message: "An unknown error has occurred" });
    return;
};
exports.default = errorHandler;
