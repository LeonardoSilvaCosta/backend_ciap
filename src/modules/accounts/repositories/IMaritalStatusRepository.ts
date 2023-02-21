import { MaritalStatus } from "@prisma/client";

export interface IMaritalStatusRepository {
  create(maritalStatus: string): Promise<MaritalStatus>;
  findById(id: string): Promise<MaritalStatus | null>;
  findByName(name: string): Promise<MaritalStatus | null>;
  list(): Promise<MaritalStatus[]>;
}