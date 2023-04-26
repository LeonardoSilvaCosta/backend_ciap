import { Router } from 'express';
import { CreateMaritalStatusController } from '../modules/maritalStatus/useCases/createMaritalStatus/CreateMaritalStatusController';

export const maritalStatusRoutes = Router();

const maritalStatusController = new CreateMaritalStatusController();

maritalStatusRoutes.post("/", maritalStatusController.handle);