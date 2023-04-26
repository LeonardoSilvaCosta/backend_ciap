import { Specialty } from "@prisma/client";

export interface ISpecialtyRepository {
  create(employee_id: string, name: string): Promise<Specialty>;
  findById(id: string): Promise<Specialty | null>;
  findByName(name: string): Promise<Specialty | null>;
  list(): Promise<Specialty[]>;
}