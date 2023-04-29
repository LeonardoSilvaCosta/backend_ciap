import { AppError } from "../../../../errors/AppError";
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';

export class DeleteEmployeeUseCase {
  constructor(
    private employeeRepository: IEmployeeRepository,
  ) { }

  async execute(id: string): Promise<void> {

    const employeeAlreadyExists = await this.employeeRepository.findById(id);

    if (!employeeAlreadyExists) {
      throw new AppError("Employee does not exists.")
    }

    return await this.employeeRepository.delete(id);
  }
}