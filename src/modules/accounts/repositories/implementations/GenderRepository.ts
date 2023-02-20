import { prisma } from '../../../../prisma';
import { Gender } from "@prisma/client";
import { IGenderRepository } from '../IGenderRepository';

export class GenderRepository implements IGenderRepository {

  async create(name: string): Promise<Gender> {
    return await prisma.gender.create({
      data: {
        name,
      }
    })
  }

  async findById(id: string): Promise<Gender | null> {
    const gender = await prisma.gender.findUnique({
      where: { id }
    })

    return gender;
  }

  async list(): Promise<Gender[]> {
    return await prisma.gender.findMany();
  }

}