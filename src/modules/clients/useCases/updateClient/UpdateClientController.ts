
import { Request, Response } from "express";
import { UpdateClientUseCase } from "./UpdateClientUseCase";
import { UpdateClientAddressUseCase } from "../updateClientAddress/UpdateClientAddressUseCase";
import { ClientAddressRepository } from "../../repositories/implementations/ClientAddressRepository";
import { UpdateClientPhoneUseCase } from "../updateEmployeePhone/UpdateClientPhoneUseCase";
import { ClientPhoneRepository } from "../../repositories/implementations/ClientPhoneRepository";
import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { IUpdateClientRequestDTO } from "../../dtos/IUpdateClientRequestDTO";

export class UpdateClientController {

  async handle(request: Request, response: Response): Promise<Response> {
    const updateClientUseCase = new UpdateClientUseCase(
      new ClientRepository,
      new UpdateClientAddressUseCase(new ClientAddressRepository),
      new UpdateClientPhoneUseCase( new ClientPhoneRepository)
    );

    const { id } = request.params;
    
    const {
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
    } = request.body as IUpdateClientRequestDTO;

    const updateClient = await updateClientUseCase.execute(id, {
      avatar,
      fullname,
      birthdate,
      gender_id,
      newPhones,
      oldPhones,
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
    })

    return response.status(200).json(updateClient);
  }
}