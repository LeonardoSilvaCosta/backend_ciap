import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ListEmployeesPhonesController } from '../modules/employees/useCases/listEmployeePhones/ListEmployeePhonesController';

export const employeePhonesRoutes = Router();

const listEmployeePhonesController = new ListEmployeesPhonesController();

employeePhonesRoutes.get("/", ensureAuthenticated, listEmployeePhonesController.handle);