import { Board } from "@prisma/client";

export interface IBoardRepository {
  create(employee_id: string, name: string): Promise<Board>;
  findById(id: string): Promise<Board | null>;
  findByName(name: string): Promise<Board | null>;
  list(): Promise<Board[]>;
}