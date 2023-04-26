import { ICreateEmployeeRequestDTO } from "../dtos/ICreateEmployeeRequestDTO";
import { IEmployeeResponseDTO } from "../dtos/IEmployeeResponseDTO";
import { Employee } from "@prisma/client";


export interface IEmployeeRepository {
  create(employee: ICreateEmployeeRequestDTO): Promise<IEmployeeResponseDTO>;
  findByEmail(email: string) : Promise<Employee | null>;
  findById(id: string): Promise<IEmployeeResponseDTO | null>;
  list(): Promise<IEmployeeResponseDTO[]>;
}