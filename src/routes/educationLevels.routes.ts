import { Router } from 'express';
import { CreateEducationLevelController } from '../modules/educationLevels/useCases/createEducationLevel/CreateEducationLevelController';

export const educationLevelsRoutes = Router();

const educationLevelController = new CreateEducationLevelController();

educationLevelsRoutes.post("/", educationLevelController.handle);