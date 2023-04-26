import { Request, Response } from "express";
import { ListAdministrativeRolesUseCase } from "./ListAdministrativeRolesUseCase";
import { AdministrativeRoleRepository } from "../../repositories/implementations/AdministrativeRoleRepository";


export class ListAdministrativeRolesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listAdministrativeRolesUseCase = new ListAdministrativeRolesUseCase(new AdministrativeRoleRepository);

    const all = await listAdministrativeRolesUseCase.execute();

    return response.json(all);
  }
}