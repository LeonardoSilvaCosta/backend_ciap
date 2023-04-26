import { Board } from "@prisma/client";
import { IAdministrativeRoleRepository } from "../../repositories/IAdministrativeRoleRepository";


export class ListAdministrativeRolesUseCase {

  constructor(
    private administrativeRoleRepository: IAdministrativeRoleRepository,
  ) { }

  async execute(): Promise<Board[]> {
    const administrativeRoles = await this.administrativeRoleRepository.list();

    return administrativeRoles
  }

}