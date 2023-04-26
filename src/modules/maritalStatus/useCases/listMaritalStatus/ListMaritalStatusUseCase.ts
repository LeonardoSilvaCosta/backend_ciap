import { MaritalStatus, Rank } from "@prisma/client";
import { IMaritalStatusRepository } from "../../repositories/IMaritalStatusRepository";


export class ListMaritalStatusUseCase {

  constructor(
    private maritalStatusRepository: IMaritalStatusRepository,
  ) { }

  async execute(): Promise<MaritalStatus[]> {
    const maritalStatus = await this.maritalStatusRepository.list();

    return maritalStatus
  }

}