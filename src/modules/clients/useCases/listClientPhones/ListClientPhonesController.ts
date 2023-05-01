import { Request, Response } from "express";
import { ClientPhoneRepository } from "../../repositories/implementations/ClientPhoneRepository";
import { ListClientPhonesUseCase } from "./ListClientPhonesUseCase";

export class ListClientPhonesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listClientPhonesUseCase = new ListClientPhonesUseCase(new ClientPhoneRepository);

    const all = await listClientPhonesUseCase.execute();

    return response.json(all);
  }
}