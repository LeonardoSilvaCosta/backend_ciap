import { ClientPhone, Prisma } from "@prisma/client";
import { ICreateClientPhoneDTO } from "../dtos/ICreateClientPhoneDTO";

export interface IClientPhoneRepository {
  create(data: ICreateClientPhoneDTO[]): Promise<Prisma.BatchPayload>;
  findById(client_id: string, phone: string): Promise<ClientPhone | null>;
  list(): Promise<ClientPhone[]>;
  update(client_id: string, oldPhones: string[], phones: string[]): Promise<ClientPhone[]>;
}