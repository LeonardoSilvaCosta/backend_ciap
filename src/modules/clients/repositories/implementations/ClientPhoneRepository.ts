import { prisma } from '../../../../prisma';
import { ClientPhone, Prisma } from '@prisma/client';
import { IClientPhoneRepository } from '../IClientPhoneRepository';
import { ICreateClientPhoneDTO } from '../../dtos/ICreateClientPhoneDTO';

export class ClientPhoneRepository implements IClientPhoneRepository {

  async create(data: ICreateClientPhoneDTO[]): Promise<Prisma.BatchPayload> {
    const createdRecords = await prisma.clientPhone.createMany({
      data: data.map((e: ICreateClientPhoneDTO) => {
        return {
          clientId: e.client_id,
          phone: e.phone,
          createdAt: new Date()
        }
      }),
    });

    return createdRecords;
  }


  async findById(client_id: string, phone: string): Promise<ClientPhone | null> {
    const phone_response = await prisma.clientPhone.findFirst({
      where: {
        clientId: client_id,
        phone
      }
    })

    return phone_response;
  }

  async list(): Promise<ClientPhone[]> {
    return await prisma.clientPhone.findMany();
  }

  async update(client_id: string, oldPhones: string[], phones: string[]): Promise<ClientPhone[]> {
    const responses = await Promise.all(oldPhones.map(async (oldPhone, index) => {
      const phoneId = { clientId: client_id, phone: oldPhone };
      const response = await prisma.clientPhone.update({
        where: {
          clientId_phone: phoneId
        },
        data: {
          phone: phones[index]
        }
      });
      return response;
    }));
  
    return responses;
  }
  

}