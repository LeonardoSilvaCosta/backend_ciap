import { Request, Response } from "express";
import { CreateAdministrativeRoleUseCase } from "./CreateAdministrativeRoleUseCase";
import { AdministrativeRoleRepository } from "../../repositories/implementations/AdministrativeRoleRepository";

export class CreateAdministrativeRoleController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createAdministrativeRoleUseCase = new CreateAdministrativeRoleUseCase(new AdministrativeRoleRepository);
    const { name } = request.body;

    const createAdministrativeRole = await createAdministrativeRoleUseCase.execute(name)

    return response.status(201).json(createAdministrativeRole);
  }
}