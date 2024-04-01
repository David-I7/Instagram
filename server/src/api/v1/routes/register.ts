import express from "express";
import registerController from "../controllers/registerController";

import errorHandler from "../middlewares/errorHandler";

const registerRouter = express.Router();

//thrown exceptions only get caught in synchronous fn's
registerRouter.route("/").post(registerController);

registerRouter.use(errorHandler);

export default registerRouter;
