import { Request, Response } from "express";
import { MaritalStatusRepository } from "../../../employees/repositories/implementations/MaritalStatusRepository";
import { CreateMaritalStatusUseCase } from "./CreateMaritalStatusUseCase";

export class CreateMaritalStatusController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: employee_id } = request.employee;
    const createMaritalStatusUseCase = new CreateMaritalStatusUseCase(new MaritalStatusRepository);
    const { name } = request.body;

    const createMaritalStatus = await createMaritalStatusUseCase.execute(employee_id, name)

    return response.status(201).json(createMaritalStatus);
  }
}