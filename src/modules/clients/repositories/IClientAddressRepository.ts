import { ClientAddress } from "@prisma/client";
import { ICreateClientAddressRequestDTO } from "../dtos/ICreateClientAddressRequestDTO";
import { IClientAddressDTO } from "../dtos/IClientAddressResponseDTO";

export interface IClientAddressRepository {
  create({ client_id, address: { postal_code, number } }: ICreateClientAddressRequestDTO): Promise<ClientAddress>;
  findById(client_id: string): Promise<ClientAddress | null>;
  list(): Promise<ClientAddress[]>;
  update(client_id: string, data: IClientAddressDTO): Promise<IClientAddressDTO>
}