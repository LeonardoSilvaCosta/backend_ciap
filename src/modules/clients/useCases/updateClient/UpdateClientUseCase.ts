import { AppError } from "../../../../errors/AppError";
import { IClientRepository } from '../../repositories/IClientRepository';
import { UpdateClientAddressUseCase } from '../updateClientAddress/UpdateClientAddressUseCase';
import { UpdateClientPhoneUseCase } from '../updateEmployeePhone/UpdateClientPhoneUseCase';
import { IUpdateClientRequestDTO } from "../../dtos/IUpdateClientRequestDTO";
import { ICreateUpdateClientResponseDTO } from "../../dtos/ICreateUpdateClientResponseDTO";

export class UpdateClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
    private updateClientAddressUseCase: UpdateClientAddressUseCase,
    private updateClientPhoneUseCase: UpdateClientPhoneUseCase
  ) { }

  async execute(id: string, {
    avatar,
    fullname,
    birthdate,
    gender_id,
    oldPhones,
    newPhones,
    address,
    marital_status_id,
    education_level_id,
    number_of_children,
    birthplace,
    code_name,
    unit_id,
    administrative_role_id,
    job_status_id,
    military_id,
    rank_id,
    board_id,
    policy_holder_id,
    type_of_bound_id
  }: IUpdateClientRequestDTO): Promise<ICreateUpdateClientResponseDTO> {
    const clientAlreadyExists = await this.clientRepository.findById(id);

    if (!clientAlreadyExists) {
      throw new AppError("Client does not exist.")
    }

    const updatedClient = await this.clientRepository.update(id, {
      avatar,
      fullname,
      birthdate,
      gender_id,
      marital_status_id,
      education_level_id,
      number_of_children,
      birthplace,
      code_name,
      unit_id,
      administrative_role_id,
      job_status_id,
      military_id,
      rank_id,
      board_id,
      policy_holder_id,
      type_of_bound_id
    })

    if (address) {
      const { postal_code, number } = address;
      await this.updateClientAddressUseCase.execute(id, {
        postal_code,
        number
      });
    }

    if (oldPhones && newPhones) {
      await this.updateClientPhoneUseCase.execute(id, oldPhones, newPhones)
    }

    return updatedClient;

  }
}