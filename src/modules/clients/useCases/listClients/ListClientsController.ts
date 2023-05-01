import { Request, Response } from "express";
import { ListClientsUseCase } from "./ListClientsUseCase";
import { ClientRepository } from "../../repositories/implementations/ClientRepository";

export class ListClientsController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listClientsUseCase = new ListClientsUseCase(new ClientRepository);

    const all = await listClientsUseCase.execute();

    return response.json(all);
  }
}