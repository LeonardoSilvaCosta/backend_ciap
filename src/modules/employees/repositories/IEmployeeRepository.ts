import { ICreateEmployeeRequestDTO } from "../dtos/ICreateEmployeeRequestDTO";
import { IEmployeeResponseDTO } from "../dtos/IEmployeeResponseDTO";
import { Employee } from "@prisma/client";
import { IUpdateEmployeeRequestDTO } from "../dtos/IUpdateEmployeeRequestDTO";
import { ICreateUpdateEmployeeResponseDTO } from "../dtos/ICreateUpdateEmployeeResponseDTO";

export interface IEmployeeRepository {
  create(employee: ICreateEmployeeRequestDTO): Promise<ICreateUpdateEmployeeResponseDTO>;
  list(): Promise<IEmployeeResponseDTO[]>;
  update(id: string, data: IUpdateEmployeeRequestDTO): Promise<ICreateUpdateEmployeeResponseDTO>;
  delete(id: string): Promise<void>;
  findByEmail(email: string) : Promise<Employee | null>;
  findById(id: string): Promise<IEmployeeResponseDTO | null>;
}