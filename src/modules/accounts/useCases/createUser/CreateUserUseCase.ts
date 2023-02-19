import { hash } from 'bcrypt';
import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { ICreateUserRequestDTO } from "../../dtos/ICreateUserRequestDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository) { }

  async execute({
    fullname,
    birthdate,
    cpf,
    gender,
    email,
    address,
    educationLevel,
    maritalStatus,
    birthplace
  }: ICreateUserRequestDTO): Promise<User> {


    const userAlreadyExists = await this.userRepository.findByEmail({fullname, phone})

    if (userAlreadyExists) {
      throw new AppError("User already exists!")
    }

    const passwordHash = await hash(password, 8);

    return await this.userRepository.create({
      fullname,
      birthdate,
      cpf,
      gender,
      email,
      address,
      educationLevel,
      maritalStatus,
      birthplace
    })

  }
}