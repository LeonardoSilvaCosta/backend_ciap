import { ClientAddress } from '@prisma/client';
import { prisma } from '../../../../prisma';
import { IClientAddressRepository } from '../IClientAddressRepository';
import { ICreateClientAddressRequestDTO } from '../../dtos/ICreateClientAddressRequestDTO';
import { IClientAddressDTO } from '../../dtos/IClientAddressResponseDTO';

export class ClientAddressRepository implements IClientAddressRepository {

  async create({ client_id,  postal_code, number }: ICreateClientAddressRequestDTO): Promise<ClientAddress> { 
    console.log(postal_code, number)
    return await prisma.clientAddress.create({
      data: {
        clientId: client_id,
        postalCode: postal_code,
        number,
        createdAt: new Date(),
      }
    })
  }

  async findById(client_id: string): Promise<ClientAddress | null> {
    const address = await prisma.clientAddress.findUnique({
      where: { clientId: client_id }
    })

    return address;
  }

  async list(): Promise<ClientAddress[]> {
    return await prisma.clientAddress.findMany();
  }

  async update(client_id: string, data: IClientAddressDTO): Promise<IClientAddressDTO> {
    const response = await prisma.clientAddress.update({
      where: {
        clientId: client_id,
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