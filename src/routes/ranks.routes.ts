import { Router } from 'express';
import { CreateRankController } from '../modules/ranks/useCases/createRank/CreateRankController';

export const ranksRoutes = Router();

const createRankController = new CreateRankController();

ranksRoutes.post("/", createRankController.handle);