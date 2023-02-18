import { Router } from 'express';
import { GetCurrentUserController } from '../modules/accounts/useCases/getCurrentUser/GetCurrentUserController';

export const currentUserRoutes = Router();

const getCurrentUserController = new GetCurrentUserController();

currentUserRoutes.get("/", getCurrentUserController.handle);