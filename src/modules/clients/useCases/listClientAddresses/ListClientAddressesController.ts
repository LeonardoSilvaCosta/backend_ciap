import { Request, Response } from "express";
import { ClientAddressRepository } from "../../repositories/implementations/ClientAddressRepository";
import { ListClientAddressesUseCase } from "./ListClientAddressesUseCase";

export class ListClientAddressesController {

  async handle(request: Request, response: Response): Promise<Response> {
    const listClientAddressesUseCase = new ListClientAddressesUseCase(new ClientAddressRepository);

    const all = await listClientAddressesUseCase.execute();

    return response.json(all);
  }
}