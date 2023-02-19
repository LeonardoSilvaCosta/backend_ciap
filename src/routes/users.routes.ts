import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateEmployeeController } from '../modules/accounts/useCases/createEmployee/CreateEmployeeController';
import { ListEmployeesController } from '../modules/accounts/useCases/listEmployees/ListEmployeesController';

export const usersRoutes = Router();

const createEmployeeController = new CreateEmployeeController();
const listEmployeesController = new ListEmployeesController();

usersRoutes.post("/", createEmployeeController.handle);
usersRoutes.get("/", ensureAuthenticated, listEmployeesController.handle);