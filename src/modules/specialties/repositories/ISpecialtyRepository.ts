import { Specialty } from "@prisma/client";

export interface ISpecialtyRepository {
  create(name: string): Promise<Specialty>;
  findById(id: string): Promise<Specialty | null>;
  findByName(name: string): Promise<Specialty | null>;
  list(): Promise<Specialty[]>;
}