"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCookieOptions = void 0;
exports.authCookieOptions = {
    maxAge: 1 * 365 * 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    domain: "localhost",
};
