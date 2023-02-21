import { Gender } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IMaritalStatusRepository } from "../../repositories/IMaritalStatusRepository";

export class CreateMaritalStatusUseCase {
  constructor(
    private maritalStatusRepository: IMaritalStatusRepository,
  ) { }

  async execute(name: string): Promise<Gender> {

    const maritalStatusAlreadyExists = await this.maritalStatusRepository.findByName(name);

    if (maritalStatusAlreadyExists) {
      throw new AppError("Marital status already exists.")
    };

    return await this.maritalStatusRepository.create(name);

  }
}