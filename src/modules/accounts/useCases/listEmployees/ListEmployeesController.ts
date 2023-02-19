import { Request, Response } from "express";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";
import { ListEmployeesUseCase } from "./ListEmployeesUseCase";

export class ListEmployeesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listEmployeesUseCase = new ListEmployeesUseCase(new EmployeeRepository);

    const all = await listEmployeesUseCase.execute();

    return response.json(all);
  }
}