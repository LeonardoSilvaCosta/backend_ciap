import { TypeOfBond } from '@prisma/client';
import { prisma } from '../../../../prisma';
import { ITypeOfBondRepository } from '../ITypeOfBondRepository';

export class TypeOfBondRepository implements ITypeOfBondRepository {

  async create(name: string): Promise<TypeOfBond> {
    return await prisma.typeOfBond.create({
      data: {
        name,
        createdAt: new Date(),
      }
    })
  }

  async findById(id: string): Promise<TypeOfBond | null> {
    const typeOfBond = await prisma.typeOfBond.findUnique({
      where: { id }
    })

    return typeOfBond;
  }

  async findByName(name: string): Promise<TypeOfBond | null> {
    const typeOfBond = await prisma.typeOfBond.findUnique({
      where: { name }
    })

    return typeOfBond;
  }

  async list(): Promise<TypeOfBond[]> {
    return await prisma.typeOfBond.findMany();
  }

}