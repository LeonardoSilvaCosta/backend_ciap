import { prisma } from '../../../../prisma';
import { AdministrativeRole } from "@prisma/client";
import { IAdministrativeRoleRepository } from '../IAdministrativeRoleRepository';

export class AdministrativeRoleRepository implements IAdministrativeRoleRepository {

  async create(name: string): Promise<AdministrativeRole> {
    return await prisma.administrativeRole.create({
      data: {
        name,
        createdAt: new Date(),
      }
    })
  }

  async findById(id: string): Promise<AdministrativeRole | null> {
    const administrativeRole = await prisma.administrativeRole.findUnique({
      where: { id }
    })

    return administrativeRole;
  }

  async findByName(name: string): Promise<AdministrativeRole | null> {
    const administrativeRole = await prisma.administrativeRole.findUnique({
      where: { name }
    })

    return administrativeRole;
  }

  async list(): Promise<AdministrativeRole[]> {
    return await prisma.administrativeRole.findMany();
  }

}