"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonFail = exports.jsonSuccess = exports.jsonError = void 0;
const jsonError = (error) => {
    return {
        status: "error",
        message: error.message,
    };
};
exports.jsonError = jsonError;
const jsonSuccess = (data = null) => {
    return {
        status: "success",
        data,
    };
};
exports.jsonSuccess = jsonSuccess;
const jsonFail = (data) => {
    return {
        status: "fail",
        data,
    };
};
exports.jsonFail = jsonFail;
