import { Router } from 'express';
import { CreateEducationLevelController } from '../modules/educationLevels/useCases/createEducationLevel/CreateEducationLevelController';
import { ListEducationLevelsController } from '../modules/educationLevels/useCases/listEducationLevels/ListEducationLevelsController';

export const educationLevelsRoutes = Router();

const createEducationLevelController = new CreateEducationLevelController();
const listEducationLevelsController = new ListEducationLevelsController();

educationLevelsRoutes.post("/", createEducationLevelController.handle);
educationLevelsRoutes.get("/", listEducationLevelsController.handle);