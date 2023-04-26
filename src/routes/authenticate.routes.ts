import { Router } from "express";
import { AuthenticateEmployeeController } from "../modules/employees/useCases/authenticateEmployee/AuthenticateEmployeeController";

export const authenticateRoutes = Router();

const authenticateEmployeeController = new AuthenticateEmployeeController();

authenticateRoutes.post("/sessions", authenticateEmployeeController.handle);