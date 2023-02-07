import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = new CreateUserUseCase(new UserRepository);
    const { name, email, password } = request.body;

    const createUser = await createUserUseCase.execute({
      name,
      email,
      password
    })

    return response.status(201).json(createUser);
  }
}