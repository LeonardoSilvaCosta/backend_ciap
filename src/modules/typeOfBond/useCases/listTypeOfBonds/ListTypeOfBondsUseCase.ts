import { Unit } from "@prisma/client";
import { ITypeOfBondRepository } from "../../repositories/ITypeOfBondRepository";

export class ListTypeOfBondsUseCase {

  constructor(
    private typeOfBondRepository: ITypeOfBondRepository,
  ) { }

  async execute(): Promise<Unit[]> {
    const typeOfBonds = await this.typeOfBondRepository.list();

    return typeOfBonds
  }

}