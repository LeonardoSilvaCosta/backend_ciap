import { Request, Response } from "express";
import { EducationLevelRepository } from "../../../employees/repositories/implementations/EducationLevelRepository";
import { CreateEducationLevelUseCase } from "./CreateEducationLevelUseCase";

export class CreateEducationLevelController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: employee_id } = request.employee;
    const createEducationLevelUseCase = new CreateEducationLevelUseCase(new EducationLevelRepository);
    const { name } = request.body;

    const createEducationLevel = await createEducationLevelUseCase.execute(employee_id, name)

    return response.status(201).json(createEducationLevel);
  }
}