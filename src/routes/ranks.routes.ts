import { Router } from 'express';
import { CreateRankController } from '../modules/ranks/useCases/createRank/CreateRankController';
import { ListRanksController } from '../modules/ranks/useCases/listRanks/ListRanksController';

export const ranksRoutes = Router();

const createRankController = new CreateRankController();
const listRanksController = new ListRanksController();

ranksRoutes.post("/", createRankController.handle);
ranksRoutes.get("/", listRanksController.handle);