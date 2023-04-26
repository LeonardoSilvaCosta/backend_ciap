import { Request, Response } from "express";
import { CreateMaritalStatusUseCase } from "./CreateMaritalStatusUseCase";
import { MaritalStatusRepository } from "../../repositories/implementations/MaritalStatusRepository";

export class CreateMaritalStatusController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createMaritalStatusUseCase = new CreateMaritalStatusUseCase(new MaritalStatusRepository);
    const { name } = request.body;

    const createMaritalStatus = await createMaritalStatusUseCase.execute(name)

    return response.status(201).json(createMaritalStatus);
  }
}