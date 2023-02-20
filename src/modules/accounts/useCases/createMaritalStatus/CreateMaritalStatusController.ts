import { Request, Response } from "express";
import { MaritalStatusRepository } from "../../repositories/implementations/MaritalStatusRepository";
import { CreateMaritalStatusUseCase } from "./CreateMaritalStatusUseCase";

export class CreateMaritalStatusController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createMaritalStatusUseCase = new CreateMaritalStatusUseCase(new MaritalStatusRepository);
    const { name } = request.body;

    const createMaritalStatus = await createMaritalStatusUseCase.execute(name)

    return response.status(201).json(createMaritalStatus);
  }
}