
import { Request, Response } from "express";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";

export class DeleteEmployeeController {

  async handle(request: Request, response: Response): Promise<Response> {
    const deleteEmployeeUseCase = new DeleteEmployeeUseCase(
      new EmployeeRepository,
    );
    const { id } = request.params;

    await deleteEmployeeUseCase.execute(id);

    return response.status(204).send();
  }
}