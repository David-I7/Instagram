"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeToHtml = exports.whiteListInput = void 0;
const whiteListInput = (input) => {
    input = input.replace(/[^a-zA-Z0-9 ]/g, "");
    return input;
};
exports.whiteListInput = whiteListInput;
const encodeToHtml = (input) => {
    input = input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    return input;
};
exports.encodeToHtml = encodeToHtml;
