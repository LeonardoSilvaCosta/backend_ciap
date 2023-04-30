import { EmployeeAddress } from "@prisma/client";
import { ICreateEmployeeAddressRequestDTO } from "../dtos/ICreateEmployeeAddressRequestDTO";
import { IEmployeeResponseDTO } from "../dtos/IEmployeeResponseDTO";
import { IEmployeeAddressDTO } from "../dtos/IEmployeeAddressResponseDTO";

export interface IEmployeeAddressRepository {
  create({ employee_id, address: { postal_code, number } }: ICreateEmployeeAddressRequestDTO): Promise<EmployeeAddress>;
  findById(id: string): Promise<EmployeeAddress | null>;
  list(): Promise<EmployeeAddress[]>;
  update(id: string, data: IEmployeeAddressDTO): Promise<IEmployeeAddressDTO>
}