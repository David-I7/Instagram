"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendVerificationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const pathConstants_1 = require("../config/pathConstants");
const jsonResponse_1 = require("../config/jsonResponse");
dotenv_1.default.config({ path: pathConstants_1.dotenvFilepath });
const sendVerificationEmail = (emailTo) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: {
                user: "iosubdavid7@gmail.com",
                pass: process.env.EMAIL_PASS,
            },
        });
        let verificationCode = Math.floor(Math.random() * 1000000).toString();
        const mailConfig = {
            from: "Instagram <instagram@gmail.com >",
            to: emailTo,
            subject: "Verify Email Address",
            text: `Verification Code: ${verificationCode}`,
        };
        transporter.sendMail(mailConfig, (err, info) => {
            if (err)
                return reject((0, jsonResponse_1.jsonError)(err, { info }));
            return resolve(verificationCode);
        });
    });
};
exports.sendVerificationEmail = sendVerificationEmail;
