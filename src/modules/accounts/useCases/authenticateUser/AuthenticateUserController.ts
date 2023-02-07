import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUserUseCase = new AuthenticateUserUseCase(new UserRepository);
    
    const { email, password } = request.body;
    const token = await authenticateUserUseCase.execute({ password, email})

    return response.json(token)
  }
} 