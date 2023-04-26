import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ListEmployeesAddressesController } from '../modules/employees/useCases/listEmployeeAddresses/ListEmployeeAddressesController';

export const employeeAddressesRoutes = Router();

const listEmployeesAddressesController = new ListEmployeesAddressesController();

employeeAddressesRoutes.get("/", ensureAuthenticated, listEmployeesAddressesController.handle);