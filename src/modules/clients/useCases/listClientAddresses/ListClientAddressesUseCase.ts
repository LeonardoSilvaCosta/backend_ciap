import { ClientAddress } from "@prisma/client";
import { IClientAddressRepository } from "../../repositories/IClientAddressRepository";

export class ListClientAddressesUseCase {

  constructor(
    private clientAddressRepository: IClientAddressRepository,
  ) { }

  async execute(): Promise<ClientAddress[]> {
    const clientAddresses = await this.clientAddressRepository.list();

    return clientAddresses
  }

}