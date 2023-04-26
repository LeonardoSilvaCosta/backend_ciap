import { EducationLevel } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IEducationLevelRepository } from "../../repositories/IEducationLevelRepository";

export class CreateEducationLevelUseCase {
  constructor(
    private educationLevelRepository: IEducationLevelRepository,
  ) { }

  async execute(employee_id: string, name: string): Promise<EducationLevel> {

    const educationLevelAlreadyExists = await this.educationLevelRepository.findByName(name);

    if (educationLevelAlreadyExists) {
      throw new AppError("Education level already exists.")
    };

    return await this.educationLevelRepository.create(employee_id, name);

  }
}