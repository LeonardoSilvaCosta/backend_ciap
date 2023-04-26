import { prisma } from '../../../../prisma';
import { IEmployeePhoneRepository } from '../IEmployeePhoneRepository';
import { ICreatePhoneDTO } from '../../dtos/ICreatePhoneDTO';
import { EmployeePhone, Prisma } from '@prisma/client';

export class EmployeePhoneRepository implements IEmployeePhoneRepository {

  async create(data: ICreatePhoneDTO[]): Promise<Prisma.BatchPayload> {
    const createdRecords = await prisma.employeePhone.createMany({
      data: data.map((e: ICreatePhoneDTO) => {
        return {
          employeeId: e.employee_id,
          phone: e.phone,
          createdAt: new Date()
        }
      }),
    });
  
    return createdRecords;
  }
  

  async findById(employee_id: string, phone: string): Promise<EmployeePhone | null> {
    const phone_response = await prisma.employeePhone.findFirst({
      where: {
        employeeId: employee_id,
        phone
      }
    })

    return phone_response;
  }

  async list(): Promise<EmployeePhone[]> {
    return await prisma.employeePhone.findMany();
  }

}