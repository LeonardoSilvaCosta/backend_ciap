
import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";
import { ClientRepository } from "../../repositories/implementations/ClientRepository";

export class DeleteClientController {

  async handle(request: Request, response: Response): Promise<Response> {
    const deleteClientUseCase = new DeleteClientUseCase(
      new ClientRepository,
    );
    const { id } = request.params;

    await deleteClientUseCase.execute(id);

    return response.status(204).send();
  }
}