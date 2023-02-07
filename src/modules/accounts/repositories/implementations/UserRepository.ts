import { prisma } from '../../../../prisma';
import { IUserRepository } from "../IUserRepository";
import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

export class UserRepository implements IUserRepository {
  async create(user: ICreateUserDTO): Promise<User> {
    return await prisma.user.create({
      data: user
    })
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    return user
  }
  async list(): Promise<User[]> {
    return await  prisma.user.findMany();
  }

}