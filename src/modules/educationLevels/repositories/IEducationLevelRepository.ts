import { EducationLevel } from "@prisma/client";

export interface IEducationLevelRepository {
  create(employee_id: string, name: string): Promise<EducationLevel>;
  findById(id: string): Promise<EducationLevel | null>;
  findByName(id: string): Promise<EducationLevel | null>;
  list(): Promise<EducationLevel[]>;
}