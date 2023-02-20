import { Request, Response } from "express";
import { ICreateUserRequestDTO } from "../../dtos/ICreateUserRequestDTO";
import { AddressRepository } from "../../repositories/implementations/AddressRepository";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateAddressUseCase } from "../createAddress/CreateAddressUseCase";

export class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const createUserUseCase = new CreateUserUseCase(
      new UserRepository,
      new CreateAddressUseCase(new AddressRepository),
    );
    const {
      fullname,
      first_phone,
      birthdate,
      cpf,
      gender_id,
      email,
      address: { postal_code, number },
      marital_status_id,
      education_level_id,
      birthplace
    } = request.body as ICreateUserRequestDTO;

    const createUser = await createUserUseCase.execute({
      fullname,
      first_phone,
      birthdate,
      cpf,
      gender_id,
      email,
      address: { postal_code, number },
      marital_status_id,
      education_level_id,
      birthplace,
      registrant_id: user_id
    })

    return response.status(201).json(createUser);
  }
}