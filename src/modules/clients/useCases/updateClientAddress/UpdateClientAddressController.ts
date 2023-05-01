
import { Request, Response } from "express";
import { UpdateClientAddressUseCase } from "./UpdateClientAddressUseCase";
import { ClientAddressRepository } from "../../repositories/implementations/ClientAddressRepository";
import { IClientAddressDTO } from "../../dtos/IClientAddressResponseDTO";


export class UpdateClientAddressController {

  async handle(request: Request, response: Response): Promise<Response> {
    const updateClientAddressUseCase = new UpdateClientAddressUseCase(new ClientAddressRepository);

    const { id } = request.params;

    const { postal_code, number } = request.body as IClientAddressDTO;

    const updateClient = await updateClientAddressUseCase.execute(
      id,
      {
        postal_code,
        number
      }
    )

    return response.status(200).json(updateClient);
  }
}