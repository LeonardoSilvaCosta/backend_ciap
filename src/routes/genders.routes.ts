import { Router } from 'express';
import { CreateGenderController } from '../modules/genders/useCases/createGender/CreateGenderController';

export const gendersRoutes = Router();

const createGenderController = new CreateGenderController();

gendersRoutes.post("/", createGenderController.handle);