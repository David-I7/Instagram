import express from "express";
import path from "path";
import mongoose from "mongoose";
import connectDB from "./config/connectDB";
import { clientIndex, clientAssets } from "./config/pathConstants";

connectDB();
const app = express();
const PORT = process.env.PORT! || 3000;

app.use(express.static(path.join(clientAssets)));

app.get("/", (req, res) => {
  res.sendFile(path.join(clientIndex));
});

mongoose.connection.once("open", () => {
  console.log("connected to DB");
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
