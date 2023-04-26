import { Router } from 'express';
import { CreateSpecialtyController } from '../modules/specialties/useCases/createSpecialty/CreateSpecialtyController';
import { ListSpecialtiesController } from '../modules/specialties/useCases/listSpecialties/ListSpecialtiesController';

export const specialtiesRoutes = Router();

const createSpecialtyController = new CreateSpecialtyController();
const listSpecialtiesController = new ListSpecialtiesController();


specialtiesRoutes.post("/", createSpecialtyController.handle);
specialtiesRoutes.get("/", listSpecialtiesController.handle);