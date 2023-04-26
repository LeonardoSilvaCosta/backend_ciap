import { Router } from 'express';
import { CreateUnitController } from '../modules/units/useCases/createUnit/CreateUnitController';
import { ListUnitsController } from '../modules/units/useCases/listUnits/ListUnitsController';

export const unitsRoutes = Router();

const createUnitController = new CreateUnitController();
const listUnitsController = new ListUnitsController();

unitsRoutes.post("/", createUnitController.handle);
unitsRoutes.get("/", listUnitsController.handle);