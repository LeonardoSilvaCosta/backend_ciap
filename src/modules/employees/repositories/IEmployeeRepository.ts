import { ICreateEmployeeRequestDTO } from "../dtos/ICreateEmployeeRequestDTO";
import { ICreateEmployeeResponseDTO } from "../dtos/ICreateEmployeeResponseDTO";
import { IEmployeeResponseDTO } from "../dtos/IEmployeeResponseDTO";
import { Employee } from "@prisma/client";

export interface IEmployeeRepository {
  create(employee: ICreateEmployeeRequestDTO): Promise<ICreateEmployeeResponseDTO>;
  findByEmail(email: string) : Promise<Employee | null>;
  findById(id: string): Promise<IEmployeeResponseDTO | null>;
  list(): Promise<IEmployeeResponseDTO[]>;
  delete(id: string): Promise<void>;
}