import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateEmployeeController } from '../modules/employees/useCases/createEmployee/CreateEmployeeController';
import { ListEmployeesController } from '../modules/employees/useCases/listEmployees/ListEmployeesController';
import { DeleteEmployeeController } from '../modules/employees/useCases/deleteEmployee/DeleteEmployeeController';
import { UpdateEmployeeController } from '../modules/employees/useCases/updateEmployee/UpdateEmployeeController';

export const employeeRoutes = Router();

const createEmployeeController = new CreateEmployeeController();
const listEmployeesController = new ListEmployeesController();
const updateEmployeeControlller = new UpdateEmployeeController();
const deleteEmployeeControlller = new DeleteEmployeeController();

employeeRoutes.post("/", createEmployeeController.handle);
employeeRoutes.get("/", listEmployeesController.handle);
employeeRoutes.put("/:id", updateEmployeeControlller.handle);
employeeRoutes.delete("/:id", deleteEmployeeControlller.handle)