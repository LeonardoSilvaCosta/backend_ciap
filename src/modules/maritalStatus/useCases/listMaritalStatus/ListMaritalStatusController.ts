import { Request, Response } from "express";
import { ListMaritalStatusUseCase } from "./ListMaritalStatusUseCase";
import { MaritalStatusRepository } from "../../repositories/implementations/MaritalStatusRepository";


export class ListMaritalStatusController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listMaritalStatusUseCase = new ListMaritalStatusUseCase(new MaritalStatusRepository);

    const all = await listMaritalStatusUseCase.execute();

    return response.json(all);
  }
}