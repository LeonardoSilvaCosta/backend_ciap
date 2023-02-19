import { Employee } from '@prisma/client';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';

export class ListEmployeesUseCase {

  constructor(
    private employeeRepository: IEmployeeRepository) {}

  async execute(): Promise<Employee[]> {
    const employees = await this.employeeRepository.list();

    return employees;
  }

}