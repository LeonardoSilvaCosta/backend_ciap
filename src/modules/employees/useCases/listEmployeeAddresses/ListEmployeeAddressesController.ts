import { Request, Response } from "express";
import { ListEmployeesAddressesUseCase } from "./ListEmployeeAddressesUseCase";
import { EmployeeAddressRepository } from "../../repositories/implementations/EmployeeAddressRepository";

export class ListEmployeesAddressesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listEmployeesAddressesUseCase = new ListEmployeesAddressesUseCase(new EmployeeAddressRepository);

    const all = await listEmployeesAddressesUseCase.execute();

    return response.json(all);
  }
}