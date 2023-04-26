import { Board } from "@prisma/client";

export interface IBoardRepository {
  create(name: string): Promise<Board>;
  findById(id: string): Promise<Board | null>;
  findByName(name: string): Promise<Board | null>;
  list(): Promise<Board[]>;
}