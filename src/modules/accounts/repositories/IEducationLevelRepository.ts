import { EducationLevel } from "@prisma/client";

export interface IEducationLevelRepository {
  create(educationLevel: string): Promise<EducationLevel>;
  findById(id: string): Promise<EducationLevel | null>;
  findByName(id: string): Promise<EducationLevel | null>;
  list(): Promise<EducationLevel[]>;
}