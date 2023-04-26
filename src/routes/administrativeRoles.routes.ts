import { Router } from 'express';
import { CreateAdministrativeRoleController } from '../modules/administrativeRoles/useCases/createAdministrativeRole/CreateAdministrativeRoleController';
import { ListAdministrativeRolesController } from '../modules/administrativeRoles/useCases/listAdministrativeRoles/ListAdministrativeRolesController';

export const administrativeRolesRoutes = Router();

const createAdministrativeRoleController = new CreateAdministrativeRoleController();
const listAdministrativeRolesController = new ListAdministrativeRolesController();

administrativeRolesRoutes.post("/", createAdministrativeRoleController.handle);
administrativeRolesRoutes.get("/", listAdministrativeRolesController.handle);