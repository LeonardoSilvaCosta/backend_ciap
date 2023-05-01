import { Prisma } from "@prisma/client";
import { IClientPhoneRepository } from "../../repositories/IClientPhoneRepository";
import { ICreateClientPhoneDTO } from "../../dtos/ICreateClientPhoneDTO";

export class CreateClientPhoneUseCase {
  constructor(
    private clientPhoneRepository: IClientPhoneRepository,
  ) { }

  async execute(phonesToSave: ICreateClientPhoneDTO[]): Promise<Prisma.BatchPayload> {

    return await this.clientPhoneRepository.create(phonesToSave);

  }
}