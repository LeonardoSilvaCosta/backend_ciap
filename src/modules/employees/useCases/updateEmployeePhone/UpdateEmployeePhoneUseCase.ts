import { EmployeePhone } from "@prisma/client";
import { IEmployeePhoneRepository } from "../../repositories/IEmployeePhoneRepository";
import { AppError } from "../../../../errors/AppError";

export class UpdateEmployeePhoneUseCase {
  constructor(
    private employeePhoneRepository: IEmployeePhoneRepository,
  ) { }

  async execute(employee_id: string, oldPhones: string[], newPhones: string[]): Promise<EmployeePhone[]> {
    const phoneExistsPromises = oldPhones.map(async (oldPhone) => {
      const phoneExists = await this.employeePhoneRepository.findById(employee_id, oldPhone);
      console.log(phoneExists)
      if (!phoneExists) {
        throw new AppError("This phone does not exist.");
      }
    });
    await Promise.all(phoneExistsPromises);

    const updatePhones = await this.employeePhoneRepository.update(
      employee_id,
      oldPhones,
      newPhones
    );

    return updatePhones;
  }

}