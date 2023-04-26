import { Router } from 'express';
import { CreateSpecialtyController } from '../modules/specialties/useCases/createSpecialty/CreateSpecialtyController';

export const specialtiesRoutes = Router();

const createSpecialtyController = new CreateSpecialtyController();

specialtiesRoutes.post("/", createSpecialtyController.handle);