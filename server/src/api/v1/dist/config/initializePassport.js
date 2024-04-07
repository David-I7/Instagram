"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth2_1 = require("passport-google-oauth2");
const passport_1 = __importDefault(require("passport"));
const dotenv_1 = __importDefault(require("dotenv"));
const pathConstants_1 = require("./pathConstants");
dotenv_1.default.config({
    path: pathConstants_1.dotenvFilepath,
});
passport_1.default.use(new passport_google_oauth2_1.Strategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "http://localhost:3000/oauth/google/callback",
    passReqToCallback: true,
}, (accessToken, refreshToken, profile, done) => {
    console.log("is this working?");
}));
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
