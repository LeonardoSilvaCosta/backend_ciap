
import { Request, Response } from "express";
import { EmployeeAddressRepository } from "../../repositories/implementations/EmployeeAddressRepository";
import { UpdateEmployeeAddressUseCase } from "./UpdateEmployeeAddressUseCase";
import { IEmployeeAddressDTO } from "../../dtos/IEmployeeAddressResponseDTO";

export class UpdateEmployeeAddressController {

  async handle(request: Request, response: Response): Promise<Response> {
    const updateEmployeeAddressUseCase = new UpdateEmployeeAddressUseCase(new EmployeeAddressRepository);

    const { id } = request.params;

    const { postal_code, number } = request.body as IEmployeeAddressDTO;

    const updateEmployee = await updateEmployeeAddressUseCase.execute(
      id,
      {
        postal_code,
        number
      }
    )

    return response.status(200).json(updateEmployee);
  }
}