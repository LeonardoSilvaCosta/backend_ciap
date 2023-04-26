import { Rank } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IRankRepository } from "../../repositories/IRankRepository";

export class CreateRankUseCase {
  constructor(
    private rankRepository: IRankRepository,
  ) { }

  async execute(employee_id: string, name: string): Promise<Rank> {

    const rankAlreadyExists = await this.rankRepository.findByName(name);

    if (rankAlreadyExists) {
      throw new AppError("Rank already exists.")
    };

    return await this.rankRepository.create(name, employee_id);

  }
}