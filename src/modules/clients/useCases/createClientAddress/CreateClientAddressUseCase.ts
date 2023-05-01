import { ClientAddress } from "@prisma/client";
import { IClientAddressRepository } from "../../repositories/IClientAddressRepository";
import { ICreateClientAddressRequestDTO } from "../../dtos/ICreateClientAddressRequestDTO";

export class CreateClientAddressUseCase {
  constructor(
    private clientAddressRepository: IClientAddressRepository,
  ) { }

  async execute({ client_id, postal_code, number  }: ICreateClientAddressRequestDTO): Promise<ClientAddress> {

    return await this.clientAddressRepository.create({ client_id, postal_code, number });

  }
}