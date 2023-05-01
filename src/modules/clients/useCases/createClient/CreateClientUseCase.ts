import { AppError } from "../../../../errors/AppError";
import { IClientRepository } from '../../repositories/IClientRepository';
import { ICreateClientRequestDTO } from '../../dtos/ICreateClientRequestDTO';
import { ICreateUpdateClientResponseDTO } from '../../dtos/ICreateUpdateClientResponseDTO';
import { CreateClientAddressUseCase } from '../createClientAddress/CreateClientAddressUseCase';
import { CreateClientPhoneUseCase } from '../createClientPhone/CreateClientPhoneUseCase';

export class CreateClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
    private createClientAddressUseCase: CreateClientAddressUseCase,
    private createClientPhoneUseCase: CreateClientPhoneUseCase
  ) { }

  async execute({
    avatar,
    fullname,
    birthdate,
    cpf,
    gender_id,
    email,
    phones,
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
    type_of_bound_id,
    created_by
  }: ICreateClientRequestDTO): Promise<ICreateUpdateClientResponseDTO> {

    const clientAlreadyExists = await this.clientRepository.findByEmail(email);

    if (clientAlreadyExists) {
      throw new AppError("Client already exists.")
    }

    const createdClient = await this.clientRepository.create({
      avatar,
      fullname,
      birthdate,
      cpf,
      gender_id,
      email,
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
      type_of_bound_id,
      created_by
    })

    if (address) {
      await this.createClientAddressUseCase.execute({
        client_id: createdClient.id ? createdClient.id : "",
        postal_code: address.postal_code,
        number: address.number,
      });
    }

    if (phones) {
      const phonesToSave = phones.map((e: string) => {
        return {
          client_id: createdClient.id ? createdClient.id : "",
          phone: e,
        }
      });
      await this.createClientPhoneUseCase.execute(phonesToSave);
    }


    return createdClient;

  }
}