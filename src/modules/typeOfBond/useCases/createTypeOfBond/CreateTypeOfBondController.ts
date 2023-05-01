import { Request, Response } from "express";
import { CreateTypeOfBondUseCase } from "./CreateTypeOfBondUseCase";
import { TypeOfBondRepository } from "../../repositories/implementations/TypeOfBondRepository";

export class CreateTypeOfBondController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createTypeOfBondUseCase = new CreateTypeOfBondUseCase(new TypeOfBondRepository);
    const { name } = request.body;

    const createTypeOfBond = await createTypeOfBondUseCase.execute(name)

    return response.status(201).json(createTypeOfBond);
  }
}