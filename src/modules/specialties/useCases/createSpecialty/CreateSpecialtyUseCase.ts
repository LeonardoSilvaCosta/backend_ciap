import { Specialty } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ISpecialtyRepository } from "../../repositories/ISpecialtyRepository";

export class CreateSpecialtyUseCase {
  constructor(
    private specialtyRepository: ISpecialtyRepository,
  ) { }

  async execute(employee_id: string, name: string): Promise<Specialty> {

    const specialtyAlreadyExists = await this.specialtyRepository.findByName(name);

    if (specialtyAlreadyExists) {
      throw new AppError("Specialty already exists.")
    };

    return await this.specialtyRepository.create(name, employee_id);

  }
}