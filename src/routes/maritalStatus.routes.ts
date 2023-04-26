import { Router } from 'express';
import { CreateMaritalStatusController } from '../modules/maritalStatus/useCases/createMaritalStatus/CreateMaritalStatusController';
import { ListMaritalStatusController } from '../modules/maritalStatus/useCases/listMaritalStatus/ListMaritalStatusController';

export const maritalStatusRoutes = Router();

const maritalStatusController = new CreateMaritalStatusController();
const listMaritalStatusController = new ListMaritalStatusController();

maritalStatusRoutes.post("/", maritalStatusController.handle);
maritalStatusRoutes.get("/", listMaritalStatusController.handle);