import { Router } from 'express';
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ListClientsController } from '../modules/clients/useCases/listClients/ListClientsController';
import { DeleteClientController } from '../modules/clients/useCases/deleteClient/DeleteClientController';
import { UpdateClientController } from '../modules/clients/useCases/updateClient/UpdateClientController';

export const clientsRoutes = Router();

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

clientsRoutes.post("/", ensureAuthenticated, createClientController.handle);
clientsRoutes.get("/", ensureAuthenticated, listClientsController.handle);
clientsRoutes.put("/:id", ensureAuthenticated, updateClientController.handle);
clientsRoutes.delete("/:id", ensureAuthenticated, deleteClientController.handle);
