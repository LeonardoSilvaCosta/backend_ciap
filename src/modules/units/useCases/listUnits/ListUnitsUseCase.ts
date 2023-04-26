import { Unit } from "@prisma/client";
import { IUnitRepository } from "../../repositories/IUnitRepository";


export class ListUnitsUseCase {

  constructor(
    private unitRepository: IUnitRepository,
  ) { }

  async execute(): Promise<Unit[]> {
    const units = await this.unitRepository.list();

    return units
  }

}