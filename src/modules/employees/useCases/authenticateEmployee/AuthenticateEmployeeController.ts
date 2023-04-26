import { Request, Response } from "express";
import { AuthenticateEmployeeUseCase } from "./AuthenticateEmployeeUseCase";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";

export class AuthenticateEmployeeController {

  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUserUseCase = new AuthenticateEmployeeUseCase(new EmployeeRepository);
    
    const { email, password } = request.body;
    const token = await authenticateUserUseCase.execute({ password, email})

    return response.json(token)
  }
} 