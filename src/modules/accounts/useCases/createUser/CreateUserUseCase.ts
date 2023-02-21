import { hash } from 'bcrypt';
import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ICreateUserRequestDTO } from "../../dtos/ICreateUserRequestDTO";
import { CreateAddressUseCase } from '../createAddress/CreateAddressUseCase';
import { CreatedUser } from '../../../../types';

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private createAddressUseCase: CreateAddressUseCase
  ) { }

  async execute({
    fullname,
    birthdate,
    cpf,
    gender_id,
    first_phone,
    email,
    address: { postal_code = "", number = 0 },
    marital_status_id,
    education_level_id,
    number_of_children,
    birthplace,
    registrant_id
  }: ICreateUserRequestDTO): Promise<CreatedUser> {

    const userAlreadyExists = await this.userRepository.findByFullNameAndPhone(fullname, first_phone);

    if (userAlreadyExists) {
      throw new AppError("User already exists.")
    }

    // const password = randomstring.generate(10);
    const password = "123"

    const passwordHash = await hash(password, 8);

    const createdUser = await this.userRepository.create({
      fullname,
      firstPhone: first_phone,
      birthdate,
      cpf,
      genderId: gender_id,
      email,
      educationLevelId: education_level_id,
      maritalStatusId: marital_status_id,
      numberOfChildren: number_of_children,
      birthplace,
      password: passwordHash,
      registrantId: registrant_id,
      createdAt: new Date(),
    })

    const createdAddress = await this.createAddressUseCase.execute({
      fkUser: createdUser.id,
      address: { postal_code, number }
    });

    return {
      fullname: createdUser.fullname,
      birthdate: createdUser.birthdate,
      cpf: createdUser.cpf,
      gender: createdUser.fkGender,
      first_phone: createdUser.firstPhone,
      email: createdUser.email,
      address: createdAddress,
      marital_status: createdUser.fkMaritalStatus ,
      education_level: createdUser.fkEducationLevel,
      number_of_children: createdUser.numberOfChildren,
      birthplace: createdUser.birthplace,
      registrant_id: createdUser.fkRegistrant,
      created_at: createdUser.createdAt,
    };

  }
}