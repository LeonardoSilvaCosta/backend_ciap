import { EducationLevel } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IEducationLevelRepository } from "../../repositories/IEducationLevelRepository";

export class CreateEducationLevelUseCase {
  constructor(
    private educationLevelRepository: IEducationLevelRepository,
  ) { }

  async execute(name: string): Promise<EducationLevel> {

    const educationLevelAlreadyExists = await this.educationLevelRepository.findById(name);

    if (educationLevelAlreadyExists) {
      throw new AppError("Education level already exists.")
    };

    return await this.educationLevelRepository.create(name);

  }
}