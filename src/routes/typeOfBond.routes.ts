import { Router } from 'express';
import { CreateTypeOfBondController } from '../modules/typeOfBond/useCases/createTypeOfBond/CreateTypeOfBondController';
import { ListTypeOfBondsController } from '../modules/typeOfBond/useCases/listTypeOfBonds/ListTypeOfBondsController';

export const typeOfBondsRoutes = Router();

const createTypeOfBondController = new CreateTypeOfBondController();
const listTypeOfBondsController = new ListTypeOfBondsController();

typeOfBondsRoutes.post("/", createTypeOfBondController.handle);
typeOfBondsRoutes.get("/", listTypeOfBondsController.handle);