import { Request, Response } from "express";
import { ListEducationLevelsUseCase } from "./ListEducationLevelsUseCase";
import { EducationLevelRepository } from "../../repositories/implementations/EducationLevelRepository";


export class ListEducationLevelsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listEducationLevelsUseCase = new ListEducationLevelsUseCase(new EducationLevelRepository);

    const all = await listEducationLevelsUseCase.execute();

    return response.json(all);
  }
}