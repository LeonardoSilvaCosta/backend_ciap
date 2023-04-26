import { EmployeeAddress } from "@prisma/client";
import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IEmployeeAddressRepository } from "../../repositories/IEmployeeAddressRepository";

export class CreateEmployeeAddressUseCase {
  constructor(
    private employeeAddressRepository: IEmployeeAddressRepository,
  ) { }

  async execute({ employee_id, address }: ICreateAddressDTO): Promise<EmployeeAddress> {

    return await this.employeeAddressRepository.create({ employee_id, address });

  }
}