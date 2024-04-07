const GOOGLE_CLIENT_ID =
  "664233904411-ada7tlrp6v6542it0niprs2hrufu2o20.apps.googleusercontent.com";

const getGoogleUrl = () => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    client_id: GOOGLE_CLIENT_ID!,
    access_type: "offline",
    response_type: "code",
    redirect_uri: "http://localhost:3000/oauth/google/callback",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs}`;
};

export default getGoogleUrl;
