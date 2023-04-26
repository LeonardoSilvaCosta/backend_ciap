import { Request, Response } from "express";
import { UnitRepository } from "../../repositories/implementations/UnitRepository";
import { ListUnitsUseCase } from "./ListUnitsUseCase";

export class ListUnitsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listUnitsUseCase = new ListUnitsUseCase(new UnitRepository);

    const all = await listUnitsUseCase.execute();

    return response.json(all);
  }
}