import { Specialty } from '@prisma/client';
import { prisma } from '../../../../prisma';
import { ISpecialtyRepository } from '../ISpecialtyRepository';

export class SpecialtyRepository implements ISpecialtyRepository {

  async create(employee_id: string, name: string): Promise<Specialty> {
    return await prisma.specialty.create({
      data: {
        name,
        createdAt: new Date(),
        createdBy:employee_id 
      }
    })
  }

  async findById(id: string): Promise<Specialty | null> {
    const specialty = await prisma.specialty.findUnique({
      where: { id }
    })

    return specialty;
  }

  async findByName(name: string): Promise<Specialty | null> {
    const specialty = await prisma.specialty.findUnique({
      where: { name }
    })

    return specialty;
  }

  async list(): Promise<Specialty[]> {
    return await prisma.specialty.findMany();
  }

}