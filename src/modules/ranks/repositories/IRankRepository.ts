import { Rank } from "@prisma/client";

export interface IRankRepository {
  create(name: string): Promise<Rank>;
  findById(id: string): Promise<Rank | null>;
  findByName(name: string): Promise<Rank | null>;
  list(): Promise<Rank[]>;
}