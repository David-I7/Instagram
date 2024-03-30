"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthError = void 0;
class AuthError extends Error {
    constructor(message, data) {
        super(message);
        this.data = data;
    }
}
exports.AuthError = AuthError;
