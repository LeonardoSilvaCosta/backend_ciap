import { Router } from 'express';
import { CreateGenderController } from '../modules/genders/useCases/createGender/CreateGenderController';
import { ListGendersController } from '../modules/genders/useCases/listGenders/ListGendersController';

export const gendersRoutes = Router();

const createGenderController = new CreateGenderController();
const listGendersController = new ListGendersController();

gendersRoutes.post("/", createGenderController.handle);
gendersRoutes.get("/", listGendersController.handle);