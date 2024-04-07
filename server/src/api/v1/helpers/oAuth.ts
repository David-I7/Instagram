type GoogleTokensResult = {
  access_token: string; //access token for google resources based on scopes
  expires_in: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
};

export const getGoogleOAuthTokens = async (
  code: string
): Promise<GoogleTokensResult | never> => {
  const rootUrl = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID!,
    client_secret: process.env.GOOGLE_CLIENT_SECRET!,
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
    return jsonResponse as GoogleTokensResult;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
