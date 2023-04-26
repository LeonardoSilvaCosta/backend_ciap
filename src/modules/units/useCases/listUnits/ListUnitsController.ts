import { Request, Response } from "express";
import { ListEmployeesUseCase } from "./ListUsersUseCase";
import { UnitRepository } from "../../repositories/implementations/UnitRepository";

export class ListUnitsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listUnitsUseCase = new ListEmployeesUseCase(new UnitRepository);

    const all = await listUnitsUseCase.execute();

    return response.json(all);
  }
}