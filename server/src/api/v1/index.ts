import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/connectDB";
import { clientIndex, clientAssets } from "./config/pathConstants";
import cookieParser from "cookie-parser";
import verifyJWT from "./middlewares/verifyJWT";
import corsOptions from "./config/corsOptions";
import verifyRoles from "./middlewares/verifyRoles";
import roles from "./config/roles";
import "./config/allowEnv";
// import "./config/initializePassport";

connectDB();
const app = express();
const PORT = process.env.PORT! || 3000;

app.use(express.static(clientAssets));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(corsOptions);

//routes
import registerRouter from "./routes/register";
app.use("/register", registerRouter);
import authRouter from "./routes/auth";
app.use("/auth", authRouter);
import validateRouter from "./routes/validate";
app.use("/validate", validateRouter);
import refreshRouter from "./routes/refresh";
app.use("/refresh", refreshRouter);
import oAuthRouter from "./routes/oAuth";
app.use("/oauth", oAuthRouter);

app.get("/", (req, res) => {
  res.sendFile(clientIndex);
});

app.get("/hello", (req, res) => {
  res.send("success");
});

import testRouter from "./routes/testroute";
app.use(
  "/test",
  verifyJWT,
  verifyRoles(roles.verifiedUser, roles.admin),
  testRouter
);

app.all("*", (req, res) => {
  res
    .status(404)
    .send(
      `The url ${new URL(
        req.url,
        `http://${req.headers.host}`
      )} is not a resource available on our server`
    );
});

mongoose.connection.once("open", () => {
  console.log("connected to DB");
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
