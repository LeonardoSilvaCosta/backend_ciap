import { Unit } from "@prisma/client";

export interface IUnitRepository {
  create(name: string): Promise<Unit>;
  findById(id: string): Promise<Unit | null>;
  findByName(name: string): Promise<Unit | null>;
  list(): Promise<Unit[]>;
}