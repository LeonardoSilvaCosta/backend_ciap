import { EmployeeAddress } from "@prisma/client";
import { ICreateEmployeeAddressDTO } from "../dtos/ICreateAddressReponseDTO";

export interface IEmployeeAddressRepository {
  create({ employee_id, address: { postal_code, number } }: ICreateEmployeeAddressDTO): Promise<EmployeeAddress>;
  findById(id: string): Promise<EmployeeAddress | null>;
  list(): Promise<EmployeeAddress[]>;
}