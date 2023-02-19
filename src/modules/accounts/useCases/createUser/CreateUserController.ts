import { Request, Response } from "express";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { ICreateUserRequestDTO } from "../../dtos/ICreateUserRequestDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = new CreateUserUseCase(new UserRepository);
    const {
      fullname,
      birthdate,
      cpf,
      gender,
      email,
      address,
      maritalStatus,
      educationLevel,
      birthplace
    } = request.body as ICreateUserRequestDTO;

    const createUser = await createUserUseCase.execute({
      fullname,
      birthdate,
      cpf,
      gender,
      email,
      address,
      maritalStatus,
      educationLevel,
      birthplace
    })

    return response.status(201).json(createUser);
  }
}