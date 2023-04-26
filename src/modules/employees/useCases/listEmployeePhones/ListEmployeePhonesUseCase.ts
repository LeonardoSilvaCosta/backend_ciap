import { EmployeeAddress, EmployeePhone } from "@prisma/client";
import { IEmployeePhoneRepository } from "../../repositories/IEmployeePhoneRepository";

export class ListEmployeesPhonesUseCase {

  constructor(
    private employeePhoneRepository: IEmployeePhoneRepository,
  ) { }

  async execute(): Promise<EmployeePhone[]> {
    const employeePhones = await this.employeePhoneRepository.list();

    return employeePhones
  }

}