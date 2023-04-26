import { Request, Response } from "express";
import { ListGendersUseCase } from "./ListGendersUseCase";
import { GenderRepository } from "../../repositories/implementations/GenderRepository";



export class ListGendersController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listGendersUseCase = new ListGendersUseCase(new GenderRepository);

    const all = await listGendersUseCase.execute();

    return response.json(all);
  }
}