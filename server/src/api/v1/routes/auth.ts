import express from "express";
import authController from "../controllers/authController";
import errorHandler from "../middlewares/errorHandler";

const authRouter = express.Router();

authRouter.route("/").post(authController);

authRouter.use(errorHandler);

export default authRouter;
