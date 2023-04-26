import { Router } from 'express';
import { CreateBoardController } from '../modules/boards/useCases/createBoard/CreateBoardController';

export const boardsRoutes = Router();

const createBoardController = new CreateBoardController();

boardsRoutes.post("/", createBoardController.handle);