import { hash } from 'bcrypt';
import { AppError } from "../../../../errors/AppError";
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';
import { IEmployeeResponseDTO } from '../../dtos/IEmployeeResponseDTO';
import { ICreateEmployeeRequestDTO } from '../../dtos/ICreateEmployeeRequestDTO';
import { CreateEmployeeAddressUseCase } from '../createEmployeeAddress/CreateEmployeeAddressUseCase';

export class CreateEmployeeUseCase {
  constructor(
    private employeeRepository: IEmployeeRepository,
    private createEmployeeAddressUseCase: CreateEmployeeAddressUseCase
  ) { }

  async execute({
    avatar,
    fullname,
    birthdate,
    cpf,
    gender_id,
    email,
    address: { postal_code, number },
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
  }: ICreateEmployeeRequestDTO): Promise<IEmployeeResponseDTO> {

    const employeeAlreadyExists = await this.employeeRepository.findByEmail(email);

    if (employeeAlreadyExists) {
      throw new AppError("Employee already exists.")
    }

    const passwordHash = await hash(password, 8);

    const createdEmployee = await this.employeeRepository.create({
      avatar,
      fullname,
      birthdate,
      cpf,
      gender_id,
      email,
      address: { postal_code, number },
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
      password,
    })

     await this.createEmployeeAddressUseCase.execute({
      employee_id: createdEmployee.id ? createdEmployee.id : "",
      address: { postal_code, number },
    });

    //CreateEmployeePhones

    return createdEmployee;

  }
}