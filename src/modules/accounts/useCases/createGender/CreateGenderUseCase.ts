import { Gender } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IGenderRepository } from "../../repositories/IGenderRepository";

export class CreateGenderUseCase {
  constructor(
    private genreRepository: IGenderRepository,
  ) { }

  async execute(name: string): Promise<Gender> {

    const genderAlreadyExists = await this.genreRepository.findById(name);

    if (genderAlreadyExists) {
      throw new AppError("Gender already exists.")
    };

    return await this.genreRepository.create(name);

  }
}