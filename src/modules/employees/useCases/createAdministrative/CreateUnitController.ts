import { Request, Response } from "express";
import { CreateUnitUseCase } from "./CreateUnitUseCase";
import { UnitRepository } from "../../repositories/implementations/UnitRepository";

export class CreateUnitController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: employee_id } = request.employee;
    const createUnitUseCase = new CreateUnitUseCase(new UnitRepository);
    const { name } = request.body;

    const createUnit = await createUnitUseCase.execute(employee_id, name)

    return response.status(201).json(createUnit);
  }
}