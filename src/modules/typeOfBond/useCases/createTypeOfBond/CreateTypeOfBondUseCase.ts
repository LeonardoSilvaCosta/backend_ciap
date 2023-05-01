import { Unit } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ITypeOfBondRepository } from "../../repositories/ITypeOfBondRepository";

export class CreateTypeOfBondUseCase {
  constructor(
    private typeOfBondRepository: ITypeOfBondRepository,
  ) { }

  async execute(name: string): Promise<Unit> {

    const typeOfBondAlreadyExists = await this.typeOfBondRepository.findByName(name);

    if (typeOfBondAlreadyExists) {
      throw new AppError("Type of bond already exists.")
    };

    return await this.typeOfBondRepository.create(name);

  }
}