"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonResponse_1 = require("../config/jsonResponse");
const mongoose_1 = require("mongoose");
const errorHandler = (err, req, res, next) => {
    if (err instanceof mongoose_1.MongooseError)
        return res
            .status(500)
            .json({ status: "error", message: "A database error has occurred" });
    if (err instanceof Error)
        return res.status(500).json((0, jsonResponse_1.jsonError)(err));
    return res.status(500).json(err);
};
exports.default = errorHandler;
