"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUsername = exports.validatePwd = exports.validatePhoneNumber = exports.validateFullName = exports.validateEmail = exports.validateDisplayUsername = exports.validateRegisterInput = exports.validateAuthInput = exports.validateSecondaryUsername = void 0;
const jsonResponse_1 = require("../../config/jsonResponse");
const validatePhoneNumber = (phoneNumber) => {
    const regex = new RegExp(/^(\+\d{1,2})? ?\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/);
    return regex.test(phoneNumber);
};
exports.validatePhoneNumber = validatePhoneNumber;
const validateFullName = (fullName) => {
    const regex = new RegExp("^[a-zA-Z]{2,20} [a-zA-Z]{2,20}(-| )?([a-zA-Z]{2,20})?$");
    return regex.test(fullName);
};
exports.validateFullName = validateFullName;
const validatePwd = (pwd) => {
    const regex = new RegExp(/^(?=.*[a-zA-Z]).{8,64}$/);
    return regex.test(pwd);
};
exports.validatePwd = validatePwd;
const validateEmail = (email) => {
    const regex = new RegExp(/^\w[\w+-~!%/\\]+@\w+.[a-z]{2,4}$/, "i");
    return regex.test(email);
};
exports.validateEmail = validateEmail;
const validateDisplayUsername = (displayUsername) => {
    const regex = new RegExp(/^\w{2,16}$/);
    return regex.test(displayUsername);
};
exports.validateDisplayUsername = validateDisplayUsername;
const validateUsername = (username) => {
    let validUsername = "";
    if (validateDisplayUsername(username)) {
        validUsername = "username";
    }
    else if (validateEmail(username)) {
        validUsername = "email";
    }
    else if (validatePhoneNumber(username)) {
        validUsername = "PhoneNumber";
    }
    if (validUsername)
        return validUsername;
    else
        return (0, jsonResponse_1.jsonFail)({ username: "Invalid Username" });
};
exports.validateUsername = validateUsername;
const validateSecondaryUsername = (secondaryUsername) => {
    if (validateEmail(secondaryUsername))
        return "email";
    if (validatePhoneNumber(secondaryUsername))
        return "phoneNumber";
    return (0, jsonResponse_1.jsonFail)({ secondaryUsername: "Invalid Secondary Username" });
};
exports.validateSecondaryUsername = validateSecondaryUsername;
const validateAuthInput = (username, pwd) => {
    let results = {
        username: "",
    };
    const vuResult = validateUsername(username);
    if (typeof vuResult === "string") {
        results.username = vuResult;
    }
    else {
        return vuResult;
    }
    if (validatePwd(pwd)) {
        return results;
    }
    return vuResult;
};
exports.validateAuthInput = validateAuthInput;
const validateRegisterInput = (displayUsername, secondaryUsername, pwd, fullName) => {
    let results = {
        secondaryUsername: "",
        displayUsername: "",
    };
    if (!validateDisplayUsername(displayUsername))
        return (0, jsonResponse_1.jsonFail)({ username: "Invalid Username" });
    else
        results.displayUsername = "username";
    if (validateEmail(secondaryUsername))
        results.secondaryUsername = "email";
    else if (validatePhoneNumber(secondaryUsername)) {
        results.secondaryUsername = "phoneNumber";
    }
    else
        return (0, jsonResponse_1.jsonFail)({ secondaryUsername: "Invalid Secondary Username" });
    if (!validatePwd(pwd))
        return (0, jsonResponse_1.jsonFail)({ pwd: "Invalid Password" });
    if (fullName) {
        if (!validateFullName(fullName))
            return (0, jsonResponse_1.jsonFail)({ fullName: "Invalid Full Name" });
    }
    return results;
};
exports.validateRegisterInput = validateRegisterInput;
