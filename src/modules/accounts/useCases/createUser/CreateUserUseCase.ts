import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from 'bcrypt';
import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "@prisma/client";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {

    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error("User already exists!")
    }

    const passwordHash = await hash(password, 8);

    return await this.userRepository.create({
      name,
      email,
      password: passwordHash
    })

  }
}