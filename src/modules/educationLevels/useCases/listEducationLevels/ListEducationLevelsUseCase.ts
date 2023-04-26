import { EducationLevel, Rank } from "@prisma/client";
import { IEducationLevelRepository } from "../../repositories/IEducationLevelRepository";


export class ListEducationLevelsUseCase {

  constructor(
    private educationLevelRepository: IEducationLevelRepository,
  ) { }

  async execute(): Promise<EducationLevel[]> {
    const educationLevels = await this.educationLevelRepository.list();

    return educationLevels
  }

}