import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/connectDB";
import { clientIndex, clientAssets } from "./config/pathConstants";
// import errorHandler from "./middlewares/errorHandler";

connectDB();
const app = express();
const PORT = process.env.PORT! || 3000;

app.use(express.static(clientAssets));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
import registerRouter from "./routes/register";
app.use("/register", registerRouter);
import authRouter from "./routes/auth";
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.sendFile(clientIndex);
});

app.all("*", (req, res) => {
  res.status(404).send("This route does not exist");
});

mongoose.connection.once("open", () => {
  console.log("connected to DB");
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
