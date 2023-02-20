import { Router } from 'express';
import { CreateMaritalStatusController } from '../modules/accounts/useCases/createMaritalStatus/CreateMaritalStatusController';

export const maritalStatusRoutes = Router();

const maritalStatusController = new CreateMaritalStatusController();

maritalStatusRoutes.post("/", maritalStatusController.handle);