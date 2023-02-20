import { Router } from 'express';
import { CreateGenderController } from '../modules/accounts/useCases/createGender/CreateGenderController';

export const gendersRoutes = Router();

const createGenderController = new CreateGenderController();

gendersRoutes.post("/", createGenderController.handle);