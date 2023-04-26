import { AppError } from "../../../../errors/AppError";
import { IEmployeeResponseDTO } from "../../dtos/IEmployeeResponseDTO";
import { IEmployeeRepository } from "../../repositories/IEmployeeRepository";


export class GetCurrentEmployeeUseCase {
  constructor(
    private employeeRepository: IEmployeeRepository) { }

  async execute(user_id: string): Promise<IEmployeeResponseDTO | null> {
    const employee = await this.employeeRepository.findById(user_id);

    if (!employee) {
      throw new AppError("Employee not found.")
    }


    return employee;

  }

}