import { Request, Response } from "express";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = new ListUsersUseCase(new UserRepository);

    const all = await listUsersUseCase.execute();

    return response.json(all);
  }
}