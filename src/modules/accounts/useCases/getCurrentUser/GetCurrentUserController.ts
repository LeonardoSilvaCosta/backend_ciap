import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";
import { GetCurrentUserUseCase } from "./GetCurrentUserUseCase";


export class GetCurrentUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getCurrentUserUseCase = new GetCurrentUserUseCase(new EmployeeRepository);

    const { authorization } = request.headers;
    const token = authorization?.split(' ')[1];

    if(!token) {
      throw new AppError("Token missing.");
    }
    const base64Token = token.split('.')[1];
    const payload = Buffer.from(String(base64Token), 'base64').toString();
    const id = JSON.parse(payload).sub;

    const getUser = await getCurrentUserUseCase.execute(id);


    return response.json(getUser);
  }

}