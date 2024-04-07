import {
  Strategy as GoogleStrategy,
  VerifyCallback,
} from "passport-google-oauth2";
import passport, { Profile } from "passport";
import dotenv from "dotenv";
import { dotenvFilepath } from "./pathConstants";

dotenv.config({
  path: dotenvFilepath,
});

passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_CLIENT_ID!}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET!}`,
      callbackURL: "http://localhost:3000/oauth/google/callback",
      passReqToCallback: true,
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      console.log("is this working?");
    }
  )
);

passport.serializeUser(
  (user: Express.User, done: (err: any, id?: unknown) => void) => {
    done(null, user);
  }
);
passport.deserializeUser(
  (user: Express.User, done: (err: any, id?: unknown) => void) => {
    done(null, user);
  }
);
