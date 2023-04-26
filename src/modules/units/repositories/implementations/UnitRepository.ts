import { prisma } from '../../../../prisma';
import { Unit } from "@prisma/client";
import { IUnitRepository } from '../IUnitRepository';

export class UnitRepository implements IUnitRepository {

  async create(name: string): Promise<Unit> {
    return await prisma.unit.create({
      data: {
        name,
        createdAt: new Date(),
      }
    })
  }

  async findById(id: string): Promise<Unit | null> {
    const unit = await prisma.unit.findUnique({
      where: { id }
    })

    return unit;
  }

  async findByName(name: string): Promise<Unit | null> {
    const unit = await prisma.unit.findUnique({
      where: { name }
    })

    return unit;
  }

  async list(): Promise<Unit[]> {
    return await prisma.unit.findMany();
  }

}