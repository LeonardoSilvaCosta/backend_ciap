import { prisma } from '../../../../prisma';
import { Rank } from "@prisma/client";
import { IRankRepository } from '../IRankRepository';

export class RankRepository implements IRankRepository {

  async create(name: string): Promise<Rank> {
    return await prisma.rank.create({
      data: {
        name,
        createdAt: new Date(),
      }
    })
  }

  async findById(id: string): Promise<Rank | null> {
    const rank = await prisma.rank.findUnique({
      where: { id }
    })

    return rank;
  }

  async findByName(name: string): Promise<Rank | null> {
    const rank = await prisma.rank.findUnique({
      where: { name }
    })

    return rank;
  }

  async list(): Promise<Rank[]> {
    return await prisma.rank.findMany();
  }

}