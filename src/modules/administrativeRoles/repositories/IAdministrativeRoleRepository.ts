import { AdministrativeRole } from "@prisma/client";

export interface IAdministrativeRoleRepository {
  create(name: string): Promise<AdministrativeRole>;
  findById(id: string): Promise<AdministrativeRole | null>;
  findByName(name: string): Promise<AdministrativeRole | null>;
  list(): Promise<AdministrativeRole[]>;
}