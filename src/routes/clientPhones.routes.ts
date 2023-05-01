import { Router } from 'express';
import { ListClientPhonesController } from '../modules/clients/useCases/listClientPhones/ListClientPhonesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const clientPhonesRoutes = Router();

const listClientPhonesController = new ListClientPhonesController();

clientPhonesRoutes.get("/", ensureAuthenticated, listClientPhonesController.handle);