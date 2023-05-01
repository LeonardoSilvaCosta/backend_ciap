import { ClientPhone } from "@prisma/client";
import { IClientPhoneRepository } from "../../repositories/IClientPhoneRepository";

export class ListClientPhonesUseCase {

  constructor(
    private clientPhoneRepository: IClientPhoneRepository,
  ) { }

  async execute(): Promise<ClientPhone[]> {
    const clientPhones = await this.clientPhoneRepository.list();

    return clientPhones
  }

}