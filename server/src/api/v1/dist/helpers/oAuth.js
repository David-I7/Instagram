"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleOAuthTokens = void 0;
const getGoogleOAuthTokens = async (code) => {
    const rootUrl = "https://oauth2.googleapis.com/token";
    const values = {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: "http://localhost:3000/oauth/google/callback",
        grant_type: "authorization_code",
    };
    const qs = new URLSearchParams(values);
    try {
        const response = await fetch(`${rootUrl}?${qs}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const jsonResponse = await response.json();
        return jsonResponse;
    }
    catch (err) {
        throw new Error(err.message);
    }
};
exports.getGoogleOAuthTokens = getGoogleOAuthTokens;
