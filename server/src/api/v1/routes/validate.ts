import { Router } from "express";
import validateController from "../controllers/validateContoller";

const validateRouter = Router();

validateRouter.post("/username", validateController.handleUsername);
validateRouter.post("/email", validateController.handleEmail);
validateRouter.post("/phoneNumber", validateController.handlePhoneNumber);

export default validateRouter;
