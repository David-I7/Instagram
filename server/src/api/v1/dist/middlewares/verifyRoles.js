"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonResponse_1 = require("../config/jsonResponse");
const verifyRoles = (...authorizedRoles) => {
    return (req, res, next) => {
        const roles = req.body.roles;
        if (!roles)
            return res
                .status(401)
                .json((0, jsonResponse_1.jsonFail)({ accessToken: "No access token provided, try logging in." }));
        const hasAccess = roles
            ?.map((role) => {
            return authorizedRoles.includes(role);
        })
            .includes(true)
            ? true
            : false;
        if (hasAccess)
            return next();
        return res
            .status(403)
            .json({ roles: `Required roles are: ${authorizedRoles.join(", ")}` });
    };
};
exports.default = verifyRoles;
