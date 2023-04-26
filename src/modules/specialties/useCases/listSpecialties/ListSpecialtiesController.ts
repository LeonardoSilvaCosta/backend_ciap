import { Request, Response } from "express";
import { SpecialtyRepository } from "../../repositories/implementations/SpecialtyRepository";
import { ListSpecialtiesUseCase } from "./ListSpecialtiesUseCase";

export class ListSpecialtiesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecialtiesUseCase = new ListSpecialtiesUseCase(new SpecialtyRepository);

    const all = await listSpecialtiesUseCase.execute();

    return response.json(all);
  }
}