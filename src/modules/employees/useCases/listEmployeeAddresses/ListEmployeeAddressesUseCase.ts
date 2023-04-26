import { EmployeeAddress } from "@prisma/client";
import { IEmployeeAddressRepository } from "../../repositories/IEmployeeAddressRepository";

export class ListEmployeesAddressesUseCase {

  constructor(
    private employeeAddressRepository: IEmployeeAddressRepository,
  ) { }

  async execute(): Promise<EmployeeAddress[]> {
    const employeeAddresses = await this.employeeAddressRepository.list();

    return employeeAddresses
  }

}