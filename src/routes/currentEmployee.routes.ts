import { Router } from 'express';
import { GetCurrentEmployeeController } from '../modules/employees/useCases/getCurrentEmployee/GetCurrentEmployeeController';

export const currentEmployeeRoutes = Router();

const getCurrentEmployeeController = new GetCurrentEmployeeController();

currentEmployeeRoutes.get("/", getCurrentEmployeeController.handle);