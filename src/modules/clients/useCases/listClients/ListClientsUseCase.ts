import { IClientResponseDTO } from "../../dtos/IClientResponseDTO";
import { IClientRepository } from "../../repositories/IClientRepository";

export class ListClientsUseCase {

  constructor(
    private clientRepository: IClientRepository,
  ) { }

  async execute(): Promise<IClientResponseDTO[]> {
    const clients = await this.clientRepository.list();

    return clients
  }

}