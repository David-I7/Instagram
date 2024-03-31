"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJsonSuccess = exports.getJsonError = void 0;
const getJsonError = (error) => {
    return {
        success: false,
        status: error.status,
        error: {
            message: error.message,
            details: error.data.details,
        },
        data: {},
    };
};
exports.getJsonError = getJsonError;
const getJsonSuccess = (status, data) => {
    return {
        sucess: true,
        status,
        data,
    };
};
exports.getJsonSuccess = getJsonSuccess;
