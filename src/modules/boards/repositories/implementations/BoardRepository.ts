import { Board } from '@prisma/client';
import { prisma } from '../../../../prisma';
import { IBoardRepository } from '../IBoardRepository';

export class BoardRepository implements IBoardRepository {

  async create(name: string): Promise<Board> {
    return await prisma.board.create({
      data: {
        name,
        createdAt: new Date(),
      }
    })
  }

  async findById(id: string): Promise<Board | null> {
    const board = await prisma.board.findUnique({
      where: { id }
    })

    return board;
  }

  async findByName(name: string): Promise<Board | null> {
    const board = await prisma.board.findUnique({
      where: { name }
    })

    return board;
  }

  async list(): Promise<Board[]> {
    return await prisma.board.findMany();
  }

}