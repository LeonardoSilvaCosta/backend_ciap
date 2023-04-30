import { hash } from 'bcrypt';
import { AppError } from "../../../../errors/AppError";
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';
import { IUpdateEmployeeRequestDTO } from '../../dtos/IUpdateEmployeeRequestDTO';
import { IEmployeeResponseDTO } from '../../dtos/IEmployeeResponseDTO';
import { UpdateEmployeeAddressUseCase } from '../updateEmployeeAddress/UpdateEmployeeAddressUseCase';
import { UpdateEmployeePhoneUseCase } from '../updateEmployeePhone/UpdateEmployeePhoneUseCase';

export class UpdateEmployeeUseCase {
  constructor(
    private employeeRepository: IEmployeeRepository,
    private updateEmployeeAddressUseCase: UpdateEmployeeAddressUseCase,
    private updateEmployeePhoneUseCase: UpdateEmployeePhoneUseCase
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
    specialty_id,
    password
  }: IUpdateEmployeeRequestDTO): Promise<IEmployeeResponseDTO> {
    const employeeAlreadyExists = await this.employeeRepository.findById(id);

    if (!employeeAlreadyExists) {
      throw new AppError("Employee does not exist.")
    }

    const passwordHash = await hash(password, 8);

    const updatedEmployee = await this.employeeRepository.update(id, {
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
      specialty_id,
      password: passwordHash,
    })

    if (address) {
      const { postal_code, number } = address;
      await this.updateEmployeeAddressUseCase.execute(id, {
        postal_code,
        number
      });
    }

    if (oldPhones && newPhones) {
      await this.updateEmployeePhoneUseCase.execute(id, oldPhones, newPhones)
    }

    return updatedEmployee;

  }
}