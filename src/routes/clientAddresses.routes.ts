import { Router } from 'express';
import { ListClientAddressesController } from '../modules/clients/useCases/listClientAddresses/ListClientAddressesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

export const clientAddressesRoutes = Router();

const listClientAddressesController = new ListClientAddressesController();

clientAddressesRoutes.get("/", ensureAuthenticated, listClientAddressesController.handle);