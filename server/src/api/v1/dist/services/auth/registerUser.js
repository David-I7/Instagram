"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbQueries_1 = require("../../services/auth/dbQueries");
const registerUser = (displayUsername, secondaryUsername, pwd, registerKeys, fullname) => {
    (0, dbQueries_1.createUser)(displayUsername, registerKeys.secondaryUsername, secondaryUsername, pwd, fullname);
};
exports.default = registerUser;
