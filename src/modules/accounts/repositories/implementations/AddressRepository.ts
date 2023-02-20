import { prisma } from '../../../../prisma';
import { Address } from "@prisma/client";
import { IAddressRepository } from '../IAddressRepository';
import { ICreateAddressDTO } from '../../dtos/ICreateAddressDTO';

export class AddressRepository implements IAddressRepository {

  async create({ fkUser, address }: ICreateAddressDTO): Promise<Address> {
    return await prisma.address.create({
      data: {
        postalCode: address.postal_code,
        number: address.number,
        fkUser
      }
    })
  }

  async findById(id: string): Promise<Address | null> {
    const address = await prisma.address.findUnique({
      where: { id }
    })

    return address;
  }

  async list(): Promise<Address[]> {
    return await prisma.address.findMany();
  }

}