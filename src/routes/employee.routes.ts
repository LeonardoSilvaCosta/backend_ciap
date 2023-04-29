import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateEmployeeController } from '../modules/employees/useCases/createEmployee/CreateEmployeeController';
import { ListEmployeesController } from '../modules/employees/useCases/listEmployees/ListEmployeesController';
import { DeleteEmployeeController } from '../modules/employees/useCases/deleteEmployee/DeleteEmployeeController';

export const employeeRoutes = Router();

const createEmployeeController = new CreateEmployeeController();
const listEmployeesController = new ListEmployeesController();
const deleteEmployeeControlller = new DeleteEmployeeController();

employeeRoutes.post("/", createEmployeeController.handle);
employeeRoutes.get("/", ensureAuthenticated, listEmployeesController.handle);
employeeRoutes.delete("/:id", ensureAuthenticated, deleteEmployeeControlller.handle)