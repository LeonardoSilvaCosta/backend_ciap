import { TypeOfBond } from "@prisma/client";

export interface ITypeOfBondRepository {
  create(name: string): Promise<TypeOfBond>;
  findById(id: string): Promise<TypeOfBond | null>;
  findByName(name: string): Promise<TypeOfBond | null>;
  list(): Promise<TypeOfBond[]>;
}