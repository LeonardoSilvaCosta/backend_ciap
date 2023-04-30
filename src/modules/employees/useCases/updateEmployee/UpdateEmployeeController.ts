
import { Request, Response } from "express";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";
import { EmployeeAddressRepository } from "../../repositories/implementations/EmployeeAddressRepository";
import { EmployeePhoneRepository } from "../../repositories/implementations/EmployeePhoneRepository";
import { UpdateEmployeeUseCase } from "./UpdateEmployeeUseCase";
import { UpdateEmployeeAddressUseCase } from "../updateEmployeeAddress/UpdateEmployeeAddressUseCase";
import { UpdateEmployeePhoneUseCase } from "../updateEmployeePhone/UpdateEmployeePhoneUseCase";
import { IUpdateEmployeeRequestDTO } from "../../dtos/IUpdateEmployeeRequestDTO";

export class UpdateEmployeeController {

  async handle(request: Request, response: Response): Promise<Response> {
    const updateEmployeeUseCase = new UpdateEmployeeUseCase(
      new EmployeeRepository,
      new UpdateEmployeeAddressUseCase(new EmployeeAddressRepository),
      new UpdateEmployeePhoneUseCase( new EmployeePhoneRepository)
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
      specialty_id,
      password
    } = request.body as IUpdateEmployeeRequestDTO;

    const updateEmployee = await updateEmployeeUseCase.execute(id, {
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
      specialty_id,
      password
    })

    return response.status(200).json(updateEmployee);
  }
}