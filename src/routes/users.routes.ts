import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { ListUsersController } from '../modules/accounts/useCases/listUsers/ListUsersController';

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", ensureAuthenticated, createUserController.handle);
usersRoutes.get("/", ensureAuthenticated, listUsersController.handle);