
import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { ICreateClientRequestDTO } from "../../dtos/ICreateClientRequestDTO";
import { CreateClientAddressUseCase } from "../createClientAddress/CreateClientAddressUseCase";
import { CreateClientPhoneUseCase } from "../createClientPhone/CreateClientPhoneUseCase";
import { ClientAddressRepository } from "../../repositories/implementations/ClientAddressRepository";
import { ClientPhoneRepository } from "../../repositories/implementations/ClientPhoneRepository";

export class CreateClientController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: employee_id } = request.employee;
    const createClientUseCase = new CreateClientUseCase(
      new ClientRepository,
      new CreateClientAddressUseCase(new ClientAddressRepository),
      new CreateClientPhoneUseCase( new ClientPhoneRepository)
    );
    
    const {
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
      type_of_bound_id
    } = request.body as ICreateClientRequestDTO;

    const createEmployee = await createClientUseCase.execute({
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
      created_by: employee_id,
    })

    return response.status(201).json(createEmployee);
  }
}