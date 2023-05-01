import { AppError } from "../../../../errors/AppError";
import { IClientAddressDTO } from "../../dtos/IClientAddressResponseDTO";
import { IClientAddressRepository } from "../../repositories/IClientAddressRepository";

export class UpdateClientAddressUseCase {
  constructor(
    private clientAddressRepository: IClientAddressRepository,
  ) { }

  async execute(id: string, address: IClientAddressDTO): Promise<IClientAddressDTO> {

    const clientAddressAlreadyExists = await this.clientAddressRepository.findById(id);

    if (!clientAddressAlreadyExists) {
      throw new AppError("Client Address does not exist.")
    }

    const updatedClientAddress = await this.clientAddressRepository.update(
      id,
      address
    )

    return updatedClientAddress;

  }
}