import { Router } from "express";
import validateController from "../controllers/validateContoller";

const validateRouter = Router();

validateRouter.post("/username", validateController.username());

export default validateRouter;
