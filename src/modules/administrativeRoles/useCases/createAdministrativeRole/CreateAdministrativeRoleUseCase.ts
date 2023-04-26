import { AdministrativeRole } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IAdministrativeRoleRepository } from "../../repositories/IAdministrativeRoleRepository";

export class CreateAdministrativeRoleUseCase {
  constructor(
    private administrativeRoleRepository: IAdministrativeRoleRepository,
  ) { }

  async execute(name: string): Promise<AdministrativeRole> {

    const administrativeRoleAlreadyExists = await this.administrativeRoleRepository.findByName(name);

    if (administrativeRoleAlreadyExists) {
      throw new AppError("Administrative Role already exists.")
    };

    return await this.administrativeRoleRepository.create(name);

  }
}