import { EmployeePhone, Prisma } from "@prisma/client";
import { ICreatePhoneDTO } from "../dtos/ICreatePhoneDTO";

export interface IEmployeePhoneRepository {
  create(data: ICreatePhoneDTO[]): Promise<Prisma.BatchPayload>;
  findById(id: string, phone: string): Promise<EmployeePhone | null>;
  list(): Promise<EmployeePhone[]>;
  update(employee_id: string, oldPhones: string[], phones: string[]): Promise<EmployeePhone[]>;
}