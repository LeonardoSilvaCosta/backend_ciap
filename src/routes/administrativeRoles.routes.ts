import { Router } from 'express';
import { CreateAdministrativeRoleController } from '../modules/administrativeRoles/useCases/createAdministrativeRole/CreateAdministrativeRoleController';

export const administrativeRolesRoutes = Router();

const createAdministrativeRoleController = new CreateAdministrativeRoleController();

administrativeRolesRoutes.post("/", createAdministrativeRoleController.handle);