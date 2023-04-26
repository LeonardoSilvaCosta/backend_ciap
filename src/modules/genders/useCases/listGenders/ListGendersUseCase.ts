import { Gender, Rank } from "@prisma/client";
import { IGenderRepository } from "../../repositories/IGenderRepository";


export class ListGendersUseCase {

  constructor(
    private genderRepository: IGenderRepository,
  ) { }

  async execute(): Promise<Gender[]> {
    const genders = await this.genderRepository.list();

    return genders
  }

}