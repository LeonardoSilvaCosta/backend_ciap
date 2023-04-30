import { AppError } from "../../../../errors/AppError";
import { IEmployeeAddressDTO } from "../../dtos/IEmployeeAddressResponseDTO";
import { IEmployeeAddressRepository } from '../../repositories/IEmployeeAddressRepository';

export class UpdateEmployeeAddressUseCase {
  constructor(
    private employeeAddressRepository: IEmployeeAddressRepository,
  ) { }

  async execute(id: string, address: IEmployeeAddressDTO): Promise<IEmployeeAddressDTO> {

    const employeeAddressAlreadyExists = await this.employeeAddressRepository.findById(id);

    if (!employeeAddressAlreadyExists) {
      throw new AppError("Employee Address does not exist.")
    }

    const updatedEmployeeAddres = await this.employeeAddressRepository.update(
      id,
      address
    )

    return updatedEmployeeAddres;

  }
}