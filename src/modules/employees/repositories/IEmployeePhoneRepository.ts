import { EmployeePhone, Prisma } from "@prisma/client";
import { ICreatePhoneDTO } from "../dtos/ICreatePhoneDTO";

export interface IEmployeePhoneRepository {
  create(data: ICreatePhoneDTO[]): Promise<Prisma.BatchPayload>;
  findById(id: string, phone: string): Promise<EmployeePhone | null>;
  list(): Promise<EmployeePhone[]>;
}