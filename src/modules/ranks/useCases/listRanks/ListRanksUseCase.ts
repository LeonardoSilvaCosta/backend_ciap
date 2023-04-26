import { Rank } from "@prisma/client";
import { IRankRepository } from "../../repositories/IRankRepository";


export class ListRanksUseCase {

  constructor(
    private rankRepository: IRankRepository,
  ) { }

  async execute(): Promise<Rank[]> {
    const ranks = await this.rankRepository.list();

    return ranks
  }

}