"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateUsername = void 0;
const dbQueries_1 = require("../../services/auth/dbQueries");
const duplicateUsername = async (fieldName, username) => {
    const duplicate = await (0, dbQueries_1.getUser)(fieldName, username);
    return duplicate ? true : false;
};
exports.duplicateUsername = duplicateUsername;
