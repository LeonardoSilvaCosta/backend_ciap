import { Request, Response } from "express";
import { EducationLevelRepository } from "../../repositories/implementations/EducationLevelRepository";
import { CreateEducationLevelUseCase } from "./CreateEducationLevelUseCase";

export class CreateEducationLevelController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createEducationLevelUseCase = new CreateEducationLevelUseCase(new EducationLevelRepository);
    const { name } = request.body;

    const createEducationLevel = await createEducationLevelUseCase.execute(name)

    return response.status(201).json(createEducationLevel);
  }
}