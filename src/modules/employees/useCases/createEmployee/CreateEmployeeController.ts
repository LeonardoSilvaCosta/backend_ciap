
import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";
import { ICreateEmployeeRequestDTO } from "../../dtos/ICreateEmployeeRequestDTO";
import { CreateEmployeeAddressUseCase } from "../createEmployeeAddress/CreateEmployeeAddressUseCase";
import { EmployeeAddressRepository } from "../../repositories/implementations/EmployeeAddressRepository";
import { EmployeePhoneRepository } from "../../repositories/implementations/EmployeePhoneRepository";
import { CreateEmployeePhoneUseCase } from "../createEmployeePhone/CreateEmployeePhoneUseCase";

export class CreateEmployeeController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createEmployeeUseCase = new CreateEmployeeUseCase(
      new EmployeeRepository,
      new CreateEmployeeAddressUseCase(new EmployeeAddressRepository),
      new CreateEmployeePhoneUseCase( new EmployeePhoneRepository)
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
      specialty_id,
      password
    } = request.body as ICreateEmployeeRequestDTO;

    const createEmployee = await createEmployeeUseCase.execute({
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
      specialty_id,
      password
    })

    return response.status(201).json(createEmployee);
  }
}