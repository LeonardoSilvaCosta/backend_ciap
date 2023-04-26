import { prisma } from '../../../../prisma';
import { MaritalStatus } from "@prisma/client";
import { IMaritalStatusRepository } from '../IMaritalStatusRepository';

export class MaritalStatusRepository implements IMaritalStatusRepository {
  async create(name: string): Promise<MaritalStatus> {
    return await prisma.maritalStatus.create({
      data: {
        name,
        createdAt: new Date(),
      }
    })
  }

  async findById(id: string): Promise<MaritalStatus | null> {
    const maritalStatus = await prisma.maritalStatus.findUnique({
      where: { id }
    })

    return maritalStatus;
  }

  async findByName(name: string): Promise<MaritalStatus | null> {
    const maritalStatus = await prisma.maritalStatus.findUnique({
      where: { name }
    })

    return maritalStatus;
  }

  async list(): Promise<MaritalStatus[]> {
    return await prisma.maritalStatus.findMany();
  }

}