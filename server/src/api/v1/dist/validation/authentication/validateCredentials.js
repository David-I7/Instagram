"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegisterInput = exports.validateAuthInput = void 0;
const errorObjects_1 = require("../../config/errorObjects");
const validatePhoneNumber = (phoneNumber) => {
    const regex = new RegExp(/^(\+\d{1,2})? ?\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/);
    return regex.test(phoneNumber);
};
const validateFullName = (fullName) => {
    const regex = new RegExp("^[a-zA-Z]{2,20} [a-zA-Z]{2,20}(-| )?([a-zA-Z]{2,20})?$");
    return regex.test(fullName);
};
const validatePwd = (pwd) => {
    const regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[\d]).{8,64}$/);
    return regex.test(pwd);
};
const validateEmail = (email) => {
    const regex = new RegExp(/^\w[\w+-~!%/\\]+@\w+.[a-z]{2,4}$/, "i");
    return regex.test(email);
};
const validateDisplayUsername = (displayUsername) => {
    const regex = new RegExp(/^\w{2,16}$/);
    return regex.test(displayUsername);
};
const validateUsername = (username) => {
    let validUsername = "";
    if (validateDisplayUsername(username)) {
        validUsername = "displayUsername";
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
        throw new errorObjects_1.AuthError("Invalid Username");
};
const validateAuthInput = (username, pwd) => {
    let results = {
        username: "",
        pwd: "",
    };
    results.username = validateUsername(username);
    if (validatePwd(pwd))
        results.pwd = "password";
    else
        throw new errorObjects_1.AuthError("Invalid Password");
    return results;
};
exports.validateAuthInput = validateAuthInput;
const validateRegisterInput = (displayUsername, secondaryUsername, pwd, fullName) => {
    let results = {
        displayUsername: "",
        secondaryUsername: "",
        pwd: "",
    };
    if (validateDisplayUsername(displayUsername))
        results.displayUsername = "displayUsername";
    else
        throw new errorObjects_1.AuthError("Invalid Username");
    if (validateEmail(secondaryUsername))
        results.secondaryUsername = "email";
    else if (validatePhoneNumber(secondaryUsername))
        results.secondaryUsername = "phoneNumber";
    if (validatePwd(pwd))
        results.pwd = "password";
    else
        throw new errorObjects_1.AuthError("Invalid Password");
    if (fullName) {
        if (validateFullName(fullName))
            results.fullName = "fullName";
        else
            throw new errorObjects_1.AuthError("Invalid Full Name");
    }
    return results;
};
exports.validateRegisterInput = validateRegisterInput;
