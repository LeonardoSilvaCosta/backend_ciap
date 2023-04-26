import { IEmployeeResponseDTO } from "../../dtos/IEmployeeResponseDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";

export class ListEmployeesUseCase {

  constructor(
    private employeeRepository: IEmployeeRepository,
  ) { }

  async execute(): Promise<IEmployeeResponseDTO[]> {
    const employees = await this.employeeRepository.list();

    return employees
  }

}