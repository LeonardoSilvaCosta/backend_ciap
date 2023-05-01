import { ClientPhone } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { IClientPhoneRepository } from "../../repositories/IClientPhoneRepository";

export class UpdateClientPhoneUseCase {
  constructor(
    private clientPhoneRepository: IClientPhoneRepository,
  ) { }

  async execute(client_id: string, oldPhones: string[], newPhones: string[]): Promise<ClientPhone[]> {
    const phoneExistsPromises = oldPhones.map(async (oldPhone) => {
      const phoneExists = await this.clientPhoneRepository.findById(client_id, oldPhone);
      if (!phoneExists) {
        throw new AppError("This phone does not exist.");
      }
    });
    await Promise.all(phoneExistsPromises);

    const updatePhones = await this.clientPhoneRepository.update(
      client_id,
      oldPhones,
      newPhones
    );

    return updatePhones;
  }

}