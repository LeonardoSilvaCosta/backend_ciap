import { Employee } from "@prisma/client";
// import { ICreateEmployeeDTO } from "../dtos/ICreateEmployeeDTO";

export interface IEmployeeRepository {
  // create(user: ICreateEmployeeDTO): Promise<Employee>;
  findByFullNameAndPhone(fullname: string, firstPhone: string ) : Promise<Employee | null>;
  findById(id: string): Promise<Employee | null>;
  list(): Promise<Employee[]>;
} 