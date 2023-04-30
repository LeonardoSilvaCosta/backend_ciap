import { EmployeeAddress } from '@prisma/client';
import { prisma } from '../../../../prisma';
import { IEmployeeAddressRepository } from '../IEmployeeAddressRepository';
import { ICreateEmployeeAddressDTO } from '../../dtos/ICreateAddressReponseDTO';

export class EmployeeAddressRepository implements IEmployeeAddressRepository {

  async create({ employee_id, address: { postal_code, number} }: ICreateEmployeeAddressDTO): Promise<EmployeeAddress> {
    return await prisma.employeeAddress.create({
      data: {
        employeeId: employee_id,
        postalCode: postal_code,
        number,
        createdAt: new Date(),
      }
    })
  }

  async findById(employee_id: string): Promise<EmployeeAddress | null> {
    const address = await prisma.employeeAddress.findUnique({
      where: { employeeId: employee_id }
    })

    return address;
  }

  async list(): Promise<EmployeeAddress[]> {
    return await prisma.employeeAddress.findMany();
  }

}