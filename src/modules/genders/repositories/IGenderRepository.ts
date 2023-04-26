import { Gender } from "@prisma/client";

export interface IGenderRepository {
  create(name: string): Promise<Gender>;
  findById(id: string): Promise<Gender | null>;
  findByName(name: string): Promise<Gender | null>;
  list(): Promise<Gender[]>;
}