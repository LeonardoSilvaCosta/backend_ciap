import { prisma } from '../../../../prisma';
import { EducationLevel } from "@prisma/client";
import { IEducationLevelRepository } from '../IEducationLevelRepository';

export class EducationLevelRepository implements IEducationLevelRepository {

  async create(name: string): Promise<EducationLevel> {
    return await prisma.educationLevel.create({
      data: {
        name,
        createdAt: new Date()
      }
    })
  }

  async findById(id: string): Promise<EducationLevel | null> {
    const educationLevel = await prisma.educationLevel.findUnique({
      where: { id }
    })

    return educationLevel;
  }

  async findByName(name: string): Promise<EducationLevel | null> {
    const educationLevel = await prisma.educationLevel.findUnique({
      where: { name }
    })

    return educationLevel;
  }

  async list(): Promise<EducationLevel[]> {
    return await prisma.educationLevel.findMany();
  }

}