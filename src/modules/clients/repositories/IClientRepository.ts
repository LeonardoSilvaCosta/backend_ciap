import { Client } from "@prisma/client";
import { IClientResponseDTO } from "../dtos/IClientResponseDTO";
import { ICreateClientRequestDTO } from "../dtos/ICreateClientRequestDTO";
import { ICreateUpdateClientResponseDTO } from "../dtos/ICreateUpdateClientResponseDTO";
import { IUpdateClientRequestDTO } from "../dtos/IUpdateClientRequestDTO";


export interface IClientRepository {
  create(employee: ICreateClientRequestDTO): Promise<ICreateUpdateClientResponseDTO>;
  list(): Promise<IClientResponseDTO[]>;
  update(id: string, data: IUpdateClientRequestDTO): Promise<ICreateUpdateClientResponseDTO>;
  delete(id: string): Promise<void>;
  findByEmail(email: string) : Promise<Client | null>;
  findById(client_id: string): Promise<IClientResponseDTO | null>;
}