import { EmployeeAddress } from "@prisma/client";
import { IEmployeeAddressRepository } from "../../repositories/IEmployeeAddressRepository";
import { ICreateEmployeeAddressRequestDTO } from "../../dtos/ICreateEmployeeAddressRequestDTO";

export class CreateEmployeeAddressUseCase {
  constructor(
    private employeeAddressRepository: IEmployeeAddressRepository,
  ) { }

  async execute({ employee_id, address: { postal_code, number } }: ICreateEmployeeAddressRequestDTO): Promise<EmployeeAddress> {

    return await this.employeeAddressRepository.create({ employee_id, address: { postal_code, number } });

  }
}