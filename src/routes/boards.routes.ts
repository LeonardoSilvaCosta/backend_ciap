import { Router } from 'express';
import { CreateBoardController } from '../modules/boards/useCases/createBoard/CreateBoardController';
import { ListBoardsController } from '../modules/boards/useCases/listBoards/ListBoardsController';

export const boardsRoutes = Router();

const createBoardController = new CreateBoardController();
const listBoardsController = new ListBoardsController();

boardsRoutes.post("/", createBoardController.handle);
boardsRoutes.get("/", listBoardsController.handle);