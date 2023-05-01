import { Request, Response } from "express";
import { ListTypeOfBondsUseCase } from "./ListTypeOfBondsUseCase";
import { TypeOfBondRepository } from "../../repositories/implementations/TypeOfBondRepository";

export class ListTypeOfBondsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listTypeOfBondsUseCase = new ListTypeOfBondsUseCase(new TypeOfBondRepository);

    const all = await listTypeOfBondsUseCase.execute();

    return response.json(all);
  }
}