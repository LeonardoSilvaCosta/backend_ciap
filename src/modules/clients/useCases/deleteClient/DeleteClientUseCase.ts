import { AppError } from "../../../../errors/AppError";
import { IClientRepository } from "../../repositories/IClientRepository";

export class DeleteClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
  ) { }

  async execute(id: string): Promise<void> {

    const clientAlreadyExists = await this.clientRepository.findById(id);

    if (!clientAlreadyExists) {
      throw new AppError("Client does not exist.")
    }

    return await this.clientRepository.delete(id);
  }
}