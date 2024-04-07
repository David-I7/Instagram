"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonResponse_1 = require("../config/jsonResponse");
const testRouter = (0, express_1.Router)();
testRouter.route("/").get((req, res) => {
    return res
        .status(200)
        .json((0, jsonResponse_1.jsonSuccess)({
        random: {
            randomObject: { hello: "world" },
            randomArray: [1, "two", 333],
        },
    }));
});
exports.default = testRouter;
