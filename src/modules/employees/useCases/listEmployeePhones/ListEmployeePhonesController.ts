import { Request, Response } from "express";
import { ListEmployeesPhonesUseCase } from "./ListEmployeePhonesUseCase";
import { EmployeePhoneRepository } from "../../repositories/implementations/EmployeePhoneRepository";

export class ListEmployeesPhonesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listEmployeesPhonesUseCase = new ListEmployeesPhonesUseCase(new EmployeePhoneRepository);

    const all = await listEmployeesPhonesUseCase.execute();

    return response.json(all);
  }
}