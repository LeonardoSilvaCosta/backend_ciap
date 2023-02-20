import { prisma } from '../../../../prisma';
import { IUserRepository } from "../IUserRepository";
import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

export class UserRepository implements IUserRepository {

  async create(user: ICreateUserDTO): Promise<User> {
    return await prisma.user.create({
      data: {
        fullname: user.firstPhone,
        firstPhone: user.firstPhone,
        cpf: user.cpf,
        birthdate: user.birthdate,
        birthplace: user.birthplace,
        email: user.email,
        numberOfChildren: user.numberOfChildren,
        fkRegistrant: user.registrantId,
        fkEducationLevel: user.educationLevelId,
        fkGender: user.genderId,
        fkMaritalStatus: user.maritalStatusId,
        password: user.password,
        createdAt: user.createdAt,
      }
    })
  }


  async findByFullNameAndPhone(fullname: string, firstPhone: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        fullname_firstPhone: {
          fullname,
          firstPhone
        }
      },
    })

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      },
    })

    return user;
  }

  async findById(id: string | undefined): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id }
    })

    return user;
  }

  async list(): Promise<User[]> {
    return await prisma.user.findMany();
  }

}