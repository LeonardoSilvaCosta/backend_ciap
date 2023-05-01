import { Client, ClientPhone } from '@prisma/client';
import { prisma } from '../../../../prisma';
import { IClientResponseDTO } from '../../dtos/IClientResponseDTO';
import { ICreateClientRequestDTO } from '../../dtos/ICreateClientRequestDTO';
import { ICreateUpdateClientResponseDTO } from '../../dtos/ICreateUpdateClientResponseDTO';
import { IClientRepository } from '../IClientRepository';
import { IUpdateClientRequestDTO } from '../../dtos/IUpdateClientRequestDTO';

export class ClientRepository implements IClientRepository {
  async create(client: ICreateClientRequestDTO): Promise<ICreateUpdateClientResponseDTO> {
    const response = await prisma.client.create({
      data: {
        avatar: client.avatar,
        fullname: client.fullname,
        birthdate: client.birthdate,
        cpf: client.cpf,
        fkGender: client.gender_id,
        email: client.email,
        fkMaritalStatus: client.marital_status_id,
        fkEducationLevel: client.education_level_id,
        numberOfChildren: client.number_of_children,
        birthplace: client.birthplace,
        codeName: client.code_name,
        fkUnit: client.unit_id,
        fkAdministrativeRole: client.administrative_role_id,
        fkJobStatus: client.job_status_id,
        militaryId: client.military_id,
        fkRank: client.rank_id,
        fkBoard: client.board_id,
        fkPolicyHolder: client.policy_holder_id,
        fkTypeOfBond: client.type_of_bound_id,
        createdBy: client.created_by,
        createdAt: new Date()
      },
      include: {
        Gender: true,
        MaritalStatus: true,
        EducationLevel: true,
        Unit: true,
        AdministrativeRole: true,
        JobStatus: true,
        Rank: true,
        Board: true,
        PolicyHolder: true,
        TypeOfBond: true,
        CreatedBy: true,
      }
    })

    return {
      id: response.id,
      avatar: response.avatar,
      fullname: response.fullname,
      birthdate: response.birthdate,
      cpf: response.cpf,
      gender: response.Gender.name,
      email: response.email,
      marital_status: response.MaritalStatus?.name,
      education_level: response.EducationLevel?.name,
      number_of_children: response.numberOfChildren,
      birthplace: response.birthplace,
      code_name: response.codeName,
      unit: response.Unit?.name,
      administrative_role: response.AdministrativeRole?.name,
      job_status: response.JobStatus?.name,
      military_id: response.militaryId,
      rank: response.Rank?.name,
      board: response.Board?.name,
      policy_holder: response.PolicyHolder?.fullname,
      type_of_bound: response.TypeOfBond?.name,
      created_at: response.createdAt,
      created_by: response.CreatedBy?.id
    }
  }

  async list(): Promise<IClientResponseDTO[]> {
    const response = await prisma.client.findMany({
      include: {
        Phones: true,
        Address: true,
        Gender: true,
        MaritalStatus: true,
        EducationLevel: true,
        ClientUpdates: true,
        Unit: true,
        AdministrativeRole: true,
        JobStatus: true,
        Rank: true,
        Board: true,
        PolicyHolder: true,
        TypeOfBond: true,
        Dependents: true,
        CreatedBy: true,
      }
    });

    const formattedClients = response.map((e) => {
      return {
        id: e.id,
        avatar: e.avatar,
        fullname: e.fullname,
        birthdate: e.birthdate,
        cpf: e.cpf,
        gender: e.Gender.name,
        email: e.email,
        phones: e.Phones.map((i: ClientPhone) => {
          return i.phone
        }),
        address: e.Address,
        marital_status: e.MaritalStatus?.name,
        education_level: e.EducationLevel?.name,
        number_of_children: e.numberOfChildren,
        birthplace: e.birthplace,
        code_name: e.codeName,
        unit: e.Unit?.name,
        administrative_role: e.AdministrativeRole?.name,
        job_status: e.JobStatus?.name,
        military_id: e.militaryId,
        rank: e.Rank?.name,
        board: e.Board?.name,
        policy_holder: e.PolicyHolder?.fullname,
        type_of_bond: e.TypeOfBond?.name,
        created_at: e.createdAt,
        created_by: e.CreatedBy.id
      }
    })

    return formattedClients;
  }

  async update(client_id: string, data: IUpdateClientRequestDTO): Promise<ICreateUpdateClientResponseDTO> {
    const response = await prisma.client.update({
      where: {
        id: client_id,
      },
      data: {
        avatar: data.avatar,
        fullname: data.fullname,
        birthdate: data.birthdate,
        fkGender: data.gender_id,
        fkMaritalStatus: data.marital_status_id,
        fkEducationLevel: data.education_level_id,
        numberOfChildren: data.number_of_children,
        birthplace: data.birthplace,
        codeName: data.code_name,
        fkUnit: data.unit_id,
        fkAdministrativeRole: data.administrative_role_id,
        fkJobStatus: data.job_status_id,
        militaryId: data.military_id,
        fkRank: data.rank_id,
        fkBoard: data.board_id,
        fkPolicyHolder: data.policy_holder_id,
        fkTypeOfBond: data.type_of_bound_id,
      },
      include: {
        Gender: true,
        MaritalStatus: true,
        EducationLevel: true,
        ClientUpdates: true,
        Unit: true,
        AdministrativeRole: true,
        JobStatus: true,
        Rank: true,
        Board: true,
        PolicyHolder: true,
        TypeOfBond: true,
        CreatedBy: true,
      }
    })

    return {
      id: response.id,
      avatar: response.avatar,
      fullname: response.fullname,
      birthdate: response.birthdate,
      cpf: response.cpf,
      gender: response.Gender.name,
      email: response.email,
      marital_status: response.MaritalStatus?.name,
      education_level: response.EducationLevel?.name,
      number_of_children: response.numberOfChildren,
      birthplace: response.birthplace,
      code_name: response.codeName,
      unit: response.Unit?.name,
      administrative_role: response.AdministrativeRole?.name,
      job_status: response.JobStatus?.name,
      military_id: response.militaryId,
      rank: response.Rank?.name,
      board: response.Board?.name,
      policy_holder: response.PolicyHolder?.fullname,
      type_of_bound: response.TypeOfBond?.name,
      created_at: response.createdAt,
      created_by: response.CreatedBy?.id
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.client.delete({
      where: {
        id,
      }
    });
  }

  async findByEmail(email: string): Promise<Client | null> {
    const client = await prisma.client.findUnique({
      where: {
        email
      }
    })

    return client;
  }

  async findById(id: string | undefined): Promise<IClientResponseDTO | null> {
    const response = await prisma.client.findUniqueOrThrow({
      where: { id },
      include: {
        Phones: true,
        Address: true,
        Gender: true,
        MaritalStatus: true,
        EducationLevel: true,
        ClientUpdates: true,
        Unit: true,
        AdministrativeRole: true,
        JobStatus: true,
        Rank: true,
        Board: true,
        PolicyHolder: true,
        TypeOfBond: true,
        CreatedBy: true,
      }
    })

    return {
      id: response.id,
      avatar: response.avatar,
      fullname: response.fullname,
      birthdate: response.birthdate,
      cpf: response.cpf,
      gender: response.Gender.name,
      email: response.email,
      phones: response.Phones.map((e: ClientPhone) => {
        return e.phone
      }),
      address: response.Address,
      marital_status: response.MaritalStatus?.name,
      education_level: response.EducationLevel?.name,
      number_of_children: response.numberOfChildren,
      birthplace: response.birthplace,
      code_name: response.codeName,
      unit: response.Unit?.name,
      administrative_role: response.AdministrativeRole?.name,
      job_status: response.JobStatus?.name,
      military_id: response.militaryId,
      rank: response.Rank?.name,
      board: response.Board?.name,
      policy_holder: response.PolicyHolder?.fullname,
      type_of_bond: response.TypeOfBond?.name,
      created_at: response.createdAt,
      created_by: response.CreatedBy?.id
    };
  }

}