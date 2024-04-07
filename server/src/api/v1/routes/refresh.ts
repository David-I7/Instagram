import { Router } from "express";
import refreshTokenController from "../controllers/refreshTokenController";

const refreshRouter = Router();

refreshRouter.route("/").get(refreshTokenController);

export default refreshRouter;
