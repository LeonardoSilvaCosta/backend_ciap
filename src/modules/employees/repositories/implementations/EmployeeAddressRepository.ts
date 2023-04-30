import { EmployeeAddress } from '@prisma/client';
import { prisma } from '../../../../prisma';
import { IEmployeeAddressRepository } from '../IEmployeeAddressRepository';
import { ICreateEmployeeAddressRequestDTO } from '../../dtos/ICreateEmployeeAddressRequestDTO';
import { IEmployeeAddressDTO } from '../../dtos/IEmployeeAddressResponseDTO';

export class EmployeeAddressRepository implements IEmployeeAddressRepository {

  async create({ employee_id, address: { postal_code, number } }: ICreateEmployeeAddressRequestDTO): Promise<EmployeeAddress> {
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

  async update(id: string, data: IEmployeeAddressDTO): Promise<IEmployeeAddressDTO> {
    const response = await prisma.employeeAddress.update({
      where: {
        employeeId: id,
      },
      data: {
        postalCode: data.postal_code,
        number: data.number
      }
    });

    return {
      postal_code: response.postalCode,
      number: response.number
    }
  }

}