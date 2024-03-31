"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = void 0;
class AuthError extends Error {
    constructor(message, data, status) {
        super(message);
        this.message = message;
        this.data = data;
        this.status = status;
    }
}
exports.AuthError = AuthError;
