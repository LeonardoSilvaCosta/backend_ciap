import { Unit } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IUnitRepository } from "../../repositories/IUnitRepository";

export class CreateUnitUseCase {
  constructor(
    private unitRepository: IUnitRepository,
  ) { }

  async execute(employee_id: string, name: string): Promise<Unit> {

    const unitAlreadyExists = await this.unitRepository.findByName(name);

    if (unitAlreadyExists) {
      throw new AppError("Unit already exists.")
    };

    return await this.unitRepository.create(name, employee_id);

  }
}