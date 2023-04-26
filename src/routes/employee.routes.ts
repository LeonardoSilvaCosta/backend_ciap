import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateEmployeeController } from '../modules/employees/useCases/createEmployee/CreateEmployeeController';
import { ListEmployeesController } from '../modules/employees/useCases/listEmployees/ListUsersController';

export const employeeRoutes = Router();

const createEmployeeController = new CreateEmployeeController();
const listEmployeesController = new ListEmployeesController();

employeeRoutes.post("/", createEmployeeController.handle);
employeeRoutes.get("/", ensureAuthenticated, listEmployeesController.handle);