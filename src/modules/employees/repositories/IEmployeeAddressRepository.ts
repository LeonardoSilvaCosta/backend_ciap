import { EmployeeAddress } from "@prisma/client";
import { ICreateAddressDTO } from "../dtos/ICreateAddressDTO";

export interface IEmployeeAddressRepository {
  create({ employee_id, address: { postal_code, number } }: ICreateAddressDTO): Promise<EmployeeAddress>;
  findById(id: string): Promise<EmployeeAddress | null>;
  list(): Promise<EmployeeAddress[]>;
}