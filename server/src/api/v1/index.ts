import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/connectDB";
import { clientIndex, clientAssets } from "./config/pathConstants";

connectDB();
const app = express();
const PORT = process.env.PORT! || 3000;

app.use(express.static(clientAssets));

//routes
import registerRouter from "./routes/register";
app.use("/register", registerRouter);
import authRouter from "./routes/register";
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.sendFile(clientIndex);
});

mongoose.connection.once("open", () => {
  console.log("connected to DB");
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
