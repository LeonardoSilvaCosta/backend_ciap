import { Request, Response } from "express";
import { CreateSpecialtyUseCase } from "./CreateSpecialtyUseCase";
import { SpecialtyRepository } from "../../repositories/implementations/SpecialtyRepository";

export class CreateSpecialtyController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: employee_id } = request.employee;
    const createSpecialtyUseCase = new CreateSpecialtyUseCase(new SpecialtyRepository);
    const { name } = request.body;

    const createSpecialty = await createSpecialtyUseCase.execute(employee_id, name)

    return response.status(201).json(createSpecialty);
  }
}