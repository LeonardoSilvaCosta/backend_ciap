import { Gender } from "@prisma/client";

export interface IGenderRepository {
  create(gender: string): Promise<Gender>;
  findById(id: string): Promise<Gender | null>;
  list(): Promise<Gender[]>;
}