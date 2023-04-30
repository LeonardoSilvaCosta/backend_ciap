import { EmployeeAddress } from "@prisma/client";
import { IEmployeeAddressRepository } from "../../repositories/IEmployeeAddressRepository";
import { ICreateEmployeeAddressDTO } from "../../dtos/ICreateAddressReponseDTO";

export class CreateEmployeeAddressUseCase {
  constructor(
    private employeeAddressRepository: IEmployeeAddressRepository,
  ) { }

  async execute({ employee_id, address: { postal_code, number } }: ICreateEmployeeAddressDTO): Promise<EmployeeAddress> {

    return await this.employeeAddressRepository.create({ employee_id, address: { postal_code, number } });

  }
}